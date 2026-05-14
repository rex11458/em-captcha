"use strict";

const express = require("express");
const axios = require("axios");
const crypto = require("crypto");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;
const embeddedPublicAssets = global.__PUBLIC_ASSETS__ || null;

// 上游地址
const CAPTCHA_BASE = "https://i.eastmoney.com/websitecaptcha/api";
const EWT_BASE     = "https://anonflow2.eastmoney.com";
const PROXY_SESSION_COOKIE = "em_proxy_sid";
const proxyCookieStore = new Map();
const RANDOM_CHARSET = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";

function getContentType(filePath) {
  switch (path.extname(filePath).toLowerCase()) {
    case ".html": return "text/html; charset=utf-8";
    case ".js": return "application/javascript; charset=utf-8";
    case ".css": return "text/css; charset=utf-8";
    case ".json": return "application/json; charset=utf-8";
    case ".svg": return "image/svg+xml";
    case ".png": return "image/png";
    case ".jpg":
    case ".jpeg": return "image/jpeg";
    case ".gif": return "image/gif";
    case ".ico": return "image/x-icon";
    case ".txt": return "text/plain; charset=utf-8";
    default: return "application/octet-stream";
  }
}

function registerStaticAssets(appInstance) {
  if (!embeddedPublicAssets) {
    appInstance.use(express.static(path.join(__dirname, "public")));
    return;
  }

  appInstance.use((req, res, next) => {
    if (req.method !== "GET" && req.method !== "HEAD") return next();

    const assetPath = req.path === "/" ? "/index.html" : req.path;
    const asset = embeddedPublicAssets[assetPath];
    if (!asset) return next();

    res.set("Content-Type", asset.contentType || getContentType(assetPath));
    res.send(Buffer.from(asset.base64, "base64"));
  });
}

// 静态文件：workspace/public/ 或内嵌资源
registerStaticAssets(app);

// ──────────────────────────────────────────
// 工具函数
// ──────────────────────────────────────────

/** 解析 Cookie 请求头为 { key: value } */
function parseCookieHeader(cookieHeader) {
  const out = {};
  String(cookieHeader || "").split(";").forEach((pair) => {
    const idx = pair.indexOf("=");
    if (idx <= 0) return;
    const key = pair.slice(0, idx).trim();
    const value = pair.slice(idx + 1).trim();
    if (key) out[key] = value;
  });
  return out;
}

function randomToken(len) {
  const size = Number(len) > 0 ? Number(len) : 21;
  const bytes = crypto.randomBytes(size);
  let out = "";
  for (let i = 0; i < bytes.length; i += 1) {
    out += RANDOM_CHARSET[bytes[i] & 63];
  }
  return out;
}

function sha256Hex(input) {
  return crypto.createHash("sha256").update(String(input), "utf8").digest("hex");
}

function buildStNvi() {
  const seed = randomToken(21);
  return seed + sha256Hex(seed).slice(0, 4);
}

/** 为每个浏览器分配本地 sid，并在服务端持久化上游 cookie */
function getProxySession(req, res) {
  if (req._proxySession) return req._proxySession;

  const requestCookies = parseCookieHeader(req.headers.cookie || "");
  let sid = requestCookies[PROXY_SESSION_COOKIE];

  if (!sid) {
    sid = crypto.randomUUID();
    res.append(
      "Set-Cookie",
      `${PROXY_SESSION_COOKIE}=${sid}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`
    );
  }

  let session = proxyCookieStore.get(sid);
  if (!session) {
    session = { cookies: {}, updatedAt: Date.now() };
    proxyCookieStore.set(sid, session);
  } else {
    session.updatedAt = Date.now();
  }

  req._proxySession = session;
  req._proxySessionRequestCookies = requestCookies;
  return session;
}

/** 组装上游请求 Cookie：浏览器请求头 + 服务端会话缓存 */
function clientCookies(req, res) {
  const session = getProxySession(req, res);
  const requestCookies = { ...(req._proxySessionRequestCookies || {}) };
  delete requestCookies[PROXY_SESSION_COOKIE];

  const merged = { ...session.cookies, ...requestCookies };
  const pairs = Object.keys(merged).map((k) => `${k}=${merged[k]}`);
  return pairs.length ? { Cookie: pairs.join("; ") } : {};
}

/** 把上游 Set-Cookie 存入服务端会话，后续代理请求自动复用 */
function forwardSetCookie(req, res, upstreamHeaders) {
  const sc = upstreamHeaders["set-cookie"];
  if (!sc) return;

  const session = getProxySession(req, res);
  sc.forEach((raw) => {
    const first = String(raw).split(";")[0];
    const idx = first.indexOf("=");
    if (idx <= 0) return;
    const key = first.slice(0, idx).trim();
    const value = first.slice(idx + 1).trim();
    if (key) session.cookies[key] = value;
  });
}

/** 读取服务端会话中缓存的上游 cookie */
function getSessionCookie(req, res, name) {
  const session = getProxySession(req, res);
  return session.cookies[name] || "";
}

/** 将指定名称的 cookie 写回浏览器（Path=/，不含 HttpOnly 便于 JS 读取） */
function appendLocalCookie(res, name, value, maxAgeSeconds) {
  res.append(
    "Set-Cookie",
    `${name}=${encodeURIComponent(value)}; Path=/; SameSite=Lax; Max-Age=${maxAgeSeconds}`
  );
}

/** 解析 JSONP 包装，返回内部 JSON 对象；失败返回 null */
function parseJsonp(text) {
  const m = String(text).match(/^\s*[\w$][\w$]*\s*\(([\s\S]+)\)\s*;?\s*$/);
  if (!m) return null;
  try { return JSON.parse(m[1]); } catch { return null; }
}

/** 打印简洁的请求日志 */
function log(tag, method, url, status) {
  console.log(`[${tag}] ${method} ${url} → ${status}`);
}

// ──────────────────────────────────────────
// POST /backend/api/webreport
//   启动时通过代理触发风控上报，并缓存上游返回的 cookie
// ──────────────────────────────────────────
app.post(
  "/backend/api/webreport",
  express.raw({ type: "*/*", limit: "2mb" }),
  async (req, res) => {
    const body = Buffer.isBuffer(req.body) ? req.body : Buffer.alloc(0);
    try {
      const session = getProxySession(req, res);
      if (!session.cookies.st_nvi) {
        session.cookies.st_nvi = buildStNvi();
      }

      const upstream = await axios.post(`${EWT_BASE}/backend/api/webreport`, body, {
        headers: {
          ...clientCookies(req, res),
          "Content-Type": req.headers["content-type"] || "application/json;charset=UTF-8",
          "User-Agent":   req.headers["user-agent"]   || "Mozilla/5.0",
          "Origin":       "https://i.eastmoney.com",
          "Referer":      "https://i.eastmoney.com/"
        },
        responseType: "arraybuffer"
      });

      forwardSetCookie(req, res, upstream.headers);
      log("webreport", "POST", "/backend/api/webreport", upstream.status);
      res
        .status(upstream.status)
        .set("Content-Type", upstream.headers["content-type"] || "application/json")
        .send(upstream.data);
    } catch (err) {
      const status = err.response?.status ?? 502;
      console.error("[webreport] error:", err.message);
      res.status(status).json({ error: err.message });
    }
  }
);

// ──────────────────────────────────────────
// GET /api/checkuser
//   判断当前 nid18 是否被 block，上游返回 JSONP，服务端解析后返回 JSON
// ──────────────────────────────────────────
app.get("/api/checkuser", async (req, res) => {
  try {
    const params = { ...req.query };
    if (!params.callback) params.callback = "wsc_checkuser";
    if (!params._) params._ = Date.now();

    const upstream = await axios.get(`${CAPTCHA_BASE}/checkuser`, {
      params,
      headers: {
        ...clientCookies(req, res),
        "Accept": "*/*",
        "Referer": "https://quote.eastmoney.com/zs000001.html",
        "User-Agent": req.headers["user-agent"] || "Mozilla/5.0"
      },
      responseType: "text"
    });

    forwardSetCookie(req, res, upstream.headers);
    log("checkuser", "GET", "/api/checkuser", upstream.status);

    // 禁止浏览器缓存，确保每次都拿到实时 block 状态
    res.set("Cache-Control", "no-store");

    // 上游返回 JSONP 格式，解析后返回纯 JSON
    const parsed = parseJsonp(upstream.data);
    res.json(parsed ?? { block: false });
  } catch (err) {
    const status = err.response?.status ?? 502;
    console.error("[checkuser] error:", err.message);
    res.status(status).json({ error: err.message });
  }
});

// ──────────────────────────────────────────
// POST /api/getcontextid
//   获取验证码 contextId
// ──────────────────────────────────────────
app.post("/api/getcontextid", express.urlencoded({ extended: true }), async (req, res) => {
  try {
    const payload = { ...req.body };
    if (!payload.browserid) {
      payload.browserid = getSessionCookie(req, res, "qgqp_b_id") || crypto.randomBytes(16).toString("hex");
    }

    const body = new URLSearchParams(payload).toString();
    const upstream = await axios.post(`${CAPTCHA_BASE}/getcontextid`, body, {
      headers: {
        ...clientCookies(req, res),
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
        "Origin": "https://i.eastmoney.com",
        "Referer": "https://i.eastmoney.com/websitecaptcha/slidervalid",
        "User-Agent": req.headers["user-agent"] || "Mozilla/5.0"
      }
    });

    forwardSetCookie(req, res, upstream.headers);
    log("getcontextid", "POST", "/api/getcontextid", upstream.status);
    res.json(upstream.data);
  } catch (err) {
    const status = err.response?.status ?? 502;
    console.error("[getcontextid] error:", err.message);
    res.status(status).json({ error: err.message });
  }
});

// ──────────────────────────────────────────
// POST /api/valid
//   上报验证码结果
// ──────────────────────────────────────────
app.post("/api/valid", express.urlencoded({ extended: true }), async (req, res) => {
  try {
    const body = new URLSearchParams(req.body).toString();
    const upstream = await axios.post(`${CAPTCHA_BASE}/valid`, body, {
      headers: {
        ...clientCookies(req, res),
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
        "Origin": "https://i.eastmoney.com",
        "Referer": "https://i.eastmoney.com/websitecaptcha/slidervalid",
        "User-Agent": req.headers["user-agent"] || "Mozilla/5.0"
      }
    });

    forwardSetCookie(req, res, upstream.headers);
    log("valid", "POST", "/api/valid", upstream.status);
    res.json(upstream.data);
  } catch (err) {
    const status = err.response?.status ?? 502;
    console.error("[valid] error:", err.message);
    res.status(status).json({ error: err.message });
  }
});

// ──────────────────────────────────────────
// GET /api/kline
//   代理东财 K 线数据，转发至 push2his.eastmoney.com
// ──────────────────────────────────────────
app.get("/api/kline", async (req, res) => {
  try {
    const upstream = await axios.get("https://push2his.eastmoney.com/api/qt/stock/kline/get", {
      params: req.query,
      headers: {
        ...clientCookies(req, res),
        "User-Agent": req.headers["user-agent"] || "Mozilla/5.0",
        "Referer":    "https://quote.eastmoney.com/"
      },
      responseType: "text"
    });

    forwardSetCookie(req, res, upstream.headers);
    log("kline", "GET", "/api/kline", upstream.status);

    // 上游可能返回 JSONP，优先尝试解析
    const parsed = parseJsonp(upstream.data);
    if (parsed) {
      res.json(parsed);
    } else {
      res.set("Content-Type", upstream.headers["content-type"] || "application/json").send(upstream.data);
    }
  } catch (err) {
    const status = err.response?.status ?? 502;
    console.error("[kline] error:", err.message);
    res.status(status).json({ error: err.message });
  }
});

// ──────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`[server] http://localhost:${PORT}`);
});
