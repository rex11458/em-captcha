(function () {
  "use strict";

  // ──────────────────────────────────────────
  // DOM refs
  // ──────────────────────────────────────────
  var logPanel = document.getElementById("logPanel");
  var captchaCard = document.getElementById("captchaCard");
  var divCaptcha = document.getElementById("divCaptcha");
  var refreshBtn = document.getElementById("refreshBtn");
  var startBtn = document.getElementById("startBtn");
  var directKlineBtn = document.getElementById("directKlineBtn");
  var directStockBtn = document.getElementById("directStockBtn");
  var clearLogBtn = document.getElementById("clearLogBtn");
  var clearCookieBtn = document.getElementById("clearCookieBtn");
  var appidInput = document.getElementById("appidInput");
  var testModeInput = document.getElementById("testModeInput");
  var checkUserInput = document.getElementById("checkUserInput");
  var cookiePanel = document.getElementById("cookiePanel");
  var cookieText = document.getElementById("cookieText");

  // ──────────────────────────────────────────
  // 日志渲染
  // ──────────────────────────────────────────
  function renderLog(type, label, detail) {
    var entry = document.createElement("div");
    entry.className = "log-entry";

    var tagClass =
      { req: "tag-req", res: "tag-res", err: "tag-err", info: "tag-info" }[
        type
      ] || "tag-info";
    var stamp = new Date().toISOString().replace("T", " ").slice(0, 23);

    var header = document.createElement("div");
    header.innerHTML =
      '<span class="log-tag ' +
      tagClass +
      '">' +
      type.toUpperCase() +
      "</span>" +
      '<span class="log-url">' +
      escapeHtml(label) +
      "</span>" +
      '<span class="log-meta">' +
      stamp +
      "</span>";
    entry.appendChild(header);

    if (detail !== undefined && detail !== null) {
      var pre = document.createElement("div");
      pre.className = "log-detail";
      pre.textContent =
        typeof detail === "string" ? detail : JSON.stringify(detail, null, 2);
      entry.appendChild(pre);
    }

    logPanel.appendChild(entry);
    logPanel.scrollTop = logPanel.scrollHeight;
  }

  function escapeHtml(text) {
    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  // ──────────────────────────────────────────
  // axios 实例 + 拦截器（自动记录所有请求/响应）
  // ──────────────────────────────────────────
  var api = axios.create({ withCredentials: true });

  api.interceptors.request.use(function (config) {
    config._startAt = Date.now();

    var detail = {
      method: config.method.toUpperCase(),
      url: config.url,
      params: config.params || undefined,
      headers: flattenHeaders(config.headers),
      data: config.data || undefined,
    };
    renderLog("req", config.method.toUpperCase() + " " + config.url, detail);
    return config;
  });

  api.interceptors.response.use(
    function (res) {
      var ms = Date.now() - (res.config._startAt || 0);
      var detail = {
        status: res.status,
        statusText: res.statusText,
        headers: flattenHeaders(res.headers),
        data: res.data,
        durationMs: ms,
      };
      renderLog("res", res.status + " " + res.config.url, detail);
      renderCookieState();
      return res;
    },
    function (err) {
      var ms = err.config ? Date.now() - (err.config._startAt || 0) : 0;
      var url = err.config ? err.config.url : "unknown";
      var detail = {
        message: err.message,
        status: err.response ? err.response.status : null,
        data: err.response ? err.response.data : null,
        durationMs: ms,
      };
      renderLog("err", url, detail);
      renderCookieState();
      return Promise.reject(err);
    },
  );

  /** axios headers 可能是嵌套对象，展开为 key:string 的纯对象 */
  function flattenHeaders(h) {
    if (!h) return {};
    var out = {};
    // axios AxiosHeaders 实例有 toJSON()
    var raw = typeof h.toJSON === "function" ? h.toJSON() : h;
    Object.keys(raw).forEach(function (k) {
      var v = raw[k];
      if (v && typeof v === "object" && !Array.isArray(v)) {
        // 内嵌分组（common / get / post …），展开
        Object.keys(v).forEach(function (kk) {
          out[kk] = String(v[kk]);
        });
      } else if (v !== undefined) {
        out[k] = String(v);
      }
    });
    return out;
  }

  // ──────────────────────────────────────────
  // Cookie 工具
  // ──────────────────────────────────────────
  function getCookie(name) {
    var m = document.cookie.match(new RegExp("(^|;\\s*)" + name + "=([^;]*)"));
    return m ? m[2] : null;
  }

  function waitForCookie(name, maxMs) {
    return new Promise(function (resolve, reject) {
      var start = Date.now();
      function probe() {
        var v = getCookie(name);
        if (v) {
          resolve(v);
          return;
        }
        if (Date.now() - start >= maxMs) {
          reject(new Error(name + " cookie 未在 " + maxMs + "ms 内生成"));
          return;
        }
        setTimeout(probe, 150);
      }
      probe();
    });
  }

  function parseCookiePairs() {
    var raw = String(document.cookie || "").trim();
    if (!raw) return [];
    return raw.split(/;\s*/).filter(Boolean);
  }

  function renderCookieState() {
    if (!cookieText || !cookiePanel) return;

    var pairs = parseCookiePairs();
    if (!pairs.length) {
      cookieText.textContent = "暂无";
      cookiePanel.style.display = "none";
      return;
    }

    cookiePanel.style.display = "block";
    cookieText.textContent = pairs.join("\n");
  }

  function clearAllCookies() {
    var pairs = parseCookiePairs();
    if (!pairs.length) return 0;

    var host = location.hostname;
    var hasDot = host && host.indexOf(".") >= 0;
    for (var i = 0; i < pairs.length; i++) {
      var eqIdx = pairs[i].indexOf("=");
      var name = eqIdx >= 0 ? pairs[i].slice(0, eqIdx) : pairs[i];
      name = name.trim();
      if (!name) continue;

      document.cookie =
        name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      document.cookie = name + "=; Max-Age=0; path=/";
      if (hasDot) {
        document.cookie =
          name +
          "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=." +
          host;
      }
    }
    return pairs.length;
  }

  function setCaptchaVisible(visible) {
    if (!captchaCard) return;
    if (visible) {
      captchaCard.classList.remove("is-hidden");
      return;
    }
    captchaCard.classList.add("is-hidden");
  }

  // ──────────────────────────────────────────
  // API 封装（全部通过 axios 发送）
  // ──────────────────────────────────────────

  /** 1. 判断是否被 block */
  function checkUser() {
    return api.get("/api/checkuser").then(function (r) {
      return r.data;
    });
  }

  /** 2. 获取验证码 contextId */
  function getContextId(browserId) {
    return api
      .post(
        "/api/getcontextid",
        new URLSearchParams({ browserid: browserId || "" }).toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
        },
      )
      .then(function (r) {
        var data = r.data;
        if (!data || data.returncode !== "0" || !data.contextid) {
          throw new Error("getcontextid 返回无效: " + JSON.stringify(data));
        }
        return data.contextid;
      });
  }

  var STOCK_GET_FIELDS =
    "f43,f44,f45,f46,f47,f48,f59,f60,f113,f114,f115,f168,f169,f170,f171";

  /** K 线 / stock/get 响应是否视为失败（不依赖 checkuser.block） */
  function isKlineFailure(data) {
    if (!data || data.error) return true;
    var rc = data.rc;
    if (rc !== undefined && rc !== null && rc !== 0 && rc !== "0") return true;
    var klines = data.data && data.data.klines;
    return !klines || !klines.length;
  }

  function isStockGetFailure(data) {
    if (!data || data.error) return true;
    var rc = data.rc;
    if (rc !== undefined && rc !== null && rc !== 0 && rc !== "0") return true;
    return !data.data;
  }

  /** 4. 获取 K 线数据
   *  secid 格式：市场.代码，例如 1.600519（沪市茅台）、0.000001（深市平安）
   */
  function fetchKlineData(secid) {
    secid = secid || "1.600519";
    return api
      .get("/api/kline", {
        params: {
          secid: secid,
          klt: 101, // 日K
          fqt: 1, // 前复权
          end: "20500101",
          lmt: 1,
          fields1: "f1,f2,f3,f4,f5,f6",
          fields2: "f51,f52,f53,f54,f55,f56,f57,f58,f59,f60,f61",
        },
      })
      .then(function (r) {
        return r.data;
      });
  }

  /** 5. 获取 push2 实时行情 stock/get（指数广度等） */
  function fetchStockGet(secid) {
    secid = secid || "1.000001";
    return api
      .get("/api/stock", {
        params: {
          secid: secid,
          forcect: 1,
          fltt: 1,
          invt: 2,
          mpi: 1000,
          fields: STOCK_GET_FIELDS,
          ut: "f057cbcbce2a86e2866ab8877db1d059",
          wbp2u: "|0|0|0|web",
        },
      })
      .then(function (r) {
        return r.data;
      });
  }

  function summarizeStockGet(data) {
    var d = (data && data.data) || {};
    return {
      f43: d.f43,
      f170: d.f170,
      f113: d.f113,
      f114: d.f114,
      f115: d.f115,
    };
  }

  /** 3. 上报验证码结果 */
  function reportValid(contextId, validateResult) {
    if (!contextId || !validateResult) {
      return Promise.reject(new Error("valid 上报参数不完整"));
    }

    return api
      .post(
        "/api/valid",
        new URLSearchParams({
          contextid: contextId,
          validateresult: validateResult,
        }).toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
        },
      )
      .then(function (r) {
        return r.data;
      });
  }

  // ──────────────────────────────────────────
  // EMCaptcha 验证码组件
  // ──────────────────────────────────────────
  function showCaptcha(appid, testMode, contextId) {
    return new Promise(function (resolve, reject) {
      if (!window.EMCaptcha) {
        reject(new Error("EMCaptcha 未加载"));
        return;
      }

      setCaptchaVisible(true);
      divCaptcha.innerHTML = "";

      var instance = new window.EMCaptcha({
        containerId: "divCaptcha",
        appid: appid,
        status: testMode ? -1 : 0,
        captchaContextId: contextId,
        product: "embed",
      })
        .onSuccess(function () {
          var v = instance.getValidate();
          renderLog("info", "验证码通过", v);
          setCaptchaVisible(false);
          resolve(v);
        })
        .onError(function (err) {
          setCaptchaVisible(false);
          reject(
            new Error(
              "验证码错误: " + (err && err.message ? err.message : String(err)),
            ),
          );
        });

      // 与官网页面保持一致，首参使用 quoteapi
      instance.verify("quoteapi", "");
    });
  }

  // ──────────────────────────────────────────
  // 验证码流程（不查 checkuser.block）
  // ──────────────────────────────────────────
  function runCaptchaFlow(fetchFn, label) {
    var appid = appidInput.value.trim();
    var testMode = testModeInput.checked;
    var browserId = getCookie("qgqp_b_id") || "";

    return getContextId(browserId)
      .then(function (contextId) {
        renderLog("info", label + " → 获取 contextId 成功", {
          contextId: contextId,
        });
        return showCaptcha(appid, testMode, contextId).then(function (validate) {
          return { contextId: contextId, validate: validate };
        });
      })
      .then(function (captchaResult) {
        var validatePayload = (captchaResult && captchaResult.validate) || {};
        var contextIdForReport =
          captchaResult.contextId ||
          validatePayload.contextId ||
          validatePayload.contextid ||
          "";
        var validateToken = validatePayload.validate || "";

        renderLog("info", label + " → 上报 valid", {
          contextId: contextIdForReport,
          validateLength: validateToken ? String(validateToken).length : 0,
        });

        return reportValid(contextIdForReport, validateToken);
      })
      .then(function (res) {
        renderLog("info", label + " → valid 上报成功", res);
        setCaptchaVisible(false);
        return new Promise(function (resolve) {
          setTimeout(resolve, 500);
        });
      })
      .then(function () {
        return fetchFn();
      });
  }

  /** 先请求行情/K线；失败则直接进入验证码并重试（跳过 checkuser） */
  function fetchWithCaptchaRetry(fetchFn, isFailure, label) {
    return fetchFn()
      .then(function (data) {
        if (!isFailure(data)) {
          renderLog("info", label + " 成功，无需验证码", data);
          return data;
        }
        throw new Error(label + " 响应无效");
      })
      .catch(function (err) {
        renderLog("info", label + " 失败，直接进入验证码（不检测 block）", {
          message: err.message,
        });
        setCaptchaVisible(false);
        divCaptcha.innerHTML = "";
        return runCaptchaFlow(fetchFn, label).then(function (data) {
          if (isFailure(data)) {
            throw new Error(label + " 验证码通过后仍失败");
          }
          renderLog("info", label + " 验证后重试成功", data);
          return data;
        });
      });
  }

  /** 启动流程：K 线 + stock/get 一并拉取 */
  function fetchWorkflowData() {
    return fetchKlineData("1.600519").then(function (klineData) {
      if (isKlineFailure(klineData)) {
        throw new Error("K线 响应无效");
      }
      renderLog("info", "K线 成功", {
        secid: "1.600519",
        bars: klineData.data.klines.length,
      });
      return fetchStockGet("1.000001").then(function (stockData) {
        if (isStockGetFailure(stockData)) {
          throw new Error("stock/get 响应无效");
        }
        renderLog("info", "stock/get 成功", summarizeStockGet(stockData));
        return { kline: klineData, stock: stockData };
      });
    });
  }

  function isWorkflowFailure(data) {
    if (!data) return true;
    return isKlineFailure(data.kline) || isStockGetFailure(data.stock);
  }

  // ──────────────────────────────────────────
  // 主流程
  // ──────────────────────────────────────────
  function runWorkflow() {
    renderLog("info", "workflow 启动：K线 + stock/get，失败则验证码（不查 block）");
    fetchWithCaptchaRetry(fetchWorkflowData, isWorkflowFailure, "K线+stock/get")
      .then(function (data) {
        renderLog("info", "workflow 完成", {
          klineSecid: "1.600519",
          klineBars: data.kline.data.klines.length,
          stockSecid: "1.000001",
          stock: summarizeStockGet(data.stock),
        });
      })
      .catch(function (err) {
        setCaptchaVisible(false);
        renderLog("err", "workflow 异常", { message: err.message });
      });
  }

  // ──────────────────────────────────────────
  // 事件绑定
  // ──────────────────────────────────────────
  startBtn.addEventListener("click", function () {
    setCaptchaVisible(false);
    divCaptcha.innerHTML = "";
    renderLog("info", "────────────────────────────────");

    runWorkflow();

    // Promise.allSettled([
    //   waitForCookie("nid18", 8000)
    // ]).then(function (results) {
    //   var nidRes = results[0];
    //   var bidRes = results[1];

    //   if (nidRes.status === "fulfilled") {
    //     renderLog("info", "nid18 已就绪", { nid: nidRes.value.slice(0, 30) + "..." });
    //   } else {
    //     renderLog("info", "nid18 未就绪，继续执行", { reason: nidRes.reason && nidRes.reason.message });
    //   }

    //   if (bidRes.status === "fulfilled") {
    //     renderLog("info", "qgqp_b_id 已就绪", { browserId: bidRes.value.slice(0, 30) + "..." });
    //   } else {
    //     renderLog("info", "qgqp_b_id 未就绪，继续执行", {
    //       reason: bidRes.reason && bidRes.reason.message
    //     });
    //   }

    //   runWorkflow();
    // });
  });

  if (directKlineBtn) {
    directKlineBtn.addEventListener("click", function () {
      renderLog("info", "直接获取K线", { secid: "1.600519" });
      fetchWithCaptchaRetry(
        function () {
          return fetchKlineData("1.600519");
        },
        isKlineFailure,
        "K线",
      ).catch(function (err) {
        renderLog("err", "直接获取K线失败", { message: err.message });
      });
    });
  }

  if (directStockBtn) {
    directStockBtn.addEventListener("click", function () {
      renderLog("info", "直接获取 stock/get", { secid: "1.000001" });
      fetchWithCaptchaRetry(
        function () {
          return fetchStockGet("1.000001");
        },
        isStockGetFailure,
        "stock/get",
      )
        .then(function (data) {
          renderLog("info", "stock/get 摘要", summarizeStockGet(data));
        })
        .catch(function (err) {
          renderLog("err", "直接获取 stock/get 失败", { message: err.message });
        });
    });
  }

  if (refreshBtn) {
    refreshBtn.addEventListener("click", function () {
      window.location.reload();
    });
  }

  clearLogBtn.addEventListener("click", function () {
    logPanel.innerHTML = "";
  });

  if (clearCookieBtn) {
    clearCookieBtn.addEventListener("click", function () {
      var removed = clearAllCookies();
      renderCookieState();
      renderLog("info", "Cookie 清理完成", { removedCount: removed });
    });
  }

  renderCookieState();
  setCaptchaVisible(false);
  renderLog("info", "页面就绪");
})();
