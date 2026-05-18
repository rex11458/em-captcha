/**
 * nid18.js
 * 页面加载时自动采集浏览器指纹，POST 到本地 webreport 代理，
 * 服务端将从响应中提取 nid18/gviem 并以 Set-Cookie 写回浏览器。
 */
(function () {
  "use strict";

  // ── 简单 32 位 hex 哈希（djb2 变体，输出 32 字符） ──────────────
  function simpleHash(str) {
    var seeds = [0x6c62272e, 0x07bb0142, 0x62b82175, 0x6295c58d];
    var hashes = seeds.slice();
    for (var i = 0; i < str.length; i++) {
      var c = str.charCodeAt(i);
      for (var j = 0; j < hashes.length; j++) {
        hashes[j] = Math.imul(hashes[j] ^ c, 0x9e3779b1) >>> 0;
        hashes[j] = ((hashes[j] << 13) | (hashes[j] >>> 19)) >>> 0;
      }
    }
    return hashes.map(function (h) { return (h >>> 0).toString(16).padStart(8, "0"); }).join("");
  }

  // ── Canvas 指纹 ──────────────────────────────────────────────────
  function getCanvasKey() {
    try {
      var c = document.createElement("canvas");
      c.width = 240; c.height = 60;
      var ctx = c.getContext("2d");
      ctx.textBaseline = "alphabetic";
      ctx.fillStyle = "#f60";
      ctx.fillRect(100, 5, 80, 30);
      ctx.fillStyle = "#069";
      ctx.font = '11pt "Times New Roman"';
      ctx.fillText("EM\u30fbnid18\ud83c\udf10", 2, 20);
      ctx.fillStyle = "rgba(102,204,0,0.7)";
      ctx.font = "18pt Arial";
      ctx.fillText("EM\u30fbnid18\ud83c\udf10", 4, 45);
      return simpleHash(c.toDataURL());
    } catch (e) {
      return simpleHash("canvas-err");
    }
  }

  // ── WebGL 指纹 ───────────────────────────────────────────────────
  function getWebglKey() {
    try {
      var c = document.createElement("canvas");
      var gl = c.getContext("webgl") || c.getContext("experimental-webgl");
      if (!gl) return simpleHash("no-webgl");
      var ext = gl.getExtension("WEBGL_debug_renderer_info");
      var renderer = ext
        ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)
        : gl.getParameter(gl.RENDERER);
      var vendor = ext
        ? gl.getParameter(ext.UNMASKED_VENDOR_WEBGL)
        : gl.getParameter(gl.VENDOR);
      return simpleHash(renderer + "|" + vendor);
    } catch (e) {
      return simpleHash("webgl-err");
    }
  }

  // ── 字体指纹 ─────────────────────────────────────────────────────
  function getFontKey() {
    var testFonts = [
      "Arial", "Arial Black", "Courier New", "Georgia",
      "Helvetica", "Impact", "Times New Roman", "Trebuchet MS",
      "Verdana", "Comic Sans MS", "Tahoma", "Palatino"
    ];
    var baseFont = "sans-serif";
    var s = document.createElement("span");
    s.style.cssText = "position:absolute;left:-9999px;font-size:72px;visibility:hidden";
    s.textContent = "mmmmmmmmmmlli";
    document.body.appendChild(s);
    s.style.fontFamily = baseFont;
    var baseW = s.offsetWidth;
    var detected = [];
    testFonts.forEach(function (font) {
      s.style.fontFamily = '"' + font + '",' + baseFont;
      if (s.offsetWidth !== baseW) detected.push(font);
    });
    document.body.removeChild(s);
    return simpleHash(detected.join(","));
  }

  // ── 音频指纹（同步近似值） ────────────────────────────────────────
  function getAudioKey() {
    try {
      var AC = window.OfflineAudioContext || window.webkitOfflineAudioContext;
      if (!AC) return simpleHash("no-audio");
      // 用设备参数生成一个一致的标识
      var ctx = new AC(1, 44100, 44100);
      var gain = ctx.createGain();
      gain.gain.value = -1;
      var osc = ctx.createOscillator();
      osc.type = "triangle";
      osc.frequency.value = 10000;
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(0);
      // 取采样率 + 通道数 + UA 生成一致 key
      return simpleHash(ctx.sampleRate + "|" + ctx.destination.channelCount + "|" + navigator.userAgent);
    } catch (e) {
      return simpleHash("audio-err");
    }
  }

  // ── 操作系统检测 ─────────────────────────────────────────────────
  function detectOs(ua) {
    var mac = ua.match(/Mac OS X ([\d_.]+)/);
    if (mac) {
      return { platform: "MacOS", version: "Mac OS X " + mac[1].replace(/_/g, ".") };
    }
    if (/Windows NT 10/.test(ua)) return { platform: "Windows", version: "Windows 10" };
    if (/Windows NT 6\.3/.test(ua)) return { platform: "Windows", version: "Windows 8.1" };
    if (/Windows NT 6\.1/.test(ua)) return { platform: "Windows", version: "Windows 7" };
    if (/Windows/.test(ua))         return { platform: "Windows", version: "Windows" };
    if (/Android ([\d.]+)/.test(ua)) return { platform: "Android", version: "Android " + RegExp.$1 };
    if (/Linux/.test(ua))           return { platform: "Linux",   version: "Linux" };
    return { platform: "Unknown", version: "Unknown" };
  }

  // ── 随机字符串 ──────────────────────────────────────────────────
  function randomStr(len) {
    var chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    var s = "";
    for (var i = 0; i < len; i++) s += chars[Math.floor(Math.random() * chars.length)];
    return s;
  }

  // ── 随机 hex 哈希 ────────────────────────────────────────────────
  function randomHash() {
    return randomStr(32);
  }

  // ── 组装 webreport payload（随机参数） ────────────────────────────
  function buildPayload() {
    var platforms = ["Windows", "MacOS", "Linux", "Android"];
    var versions = ["Windows 10", "Windows 11", "Mac OS X 14.5", "Mac OS X 15.2", "Linux", "Android 14"];
    var langs = ["zh", "en", "ja", "ko", "fr", "de", "es"];
    var timezones = ["Asia/Shanghai", "America/New_York", "Europe/London", "Asia/Tokyo", "Europe/Berlin"];
    var resolutions = ["1920X1080", "2560X1440", "1440X900", "1366X768", "3840X2160"];

    return {
      osPlatform: platforms[Math.floor(Math.random() * platforms.length)],
      sourceType: "WEB",
      osversion: versions[Math.floor(Math.random() * versions.length)],
      language: langs[Math.floor(Math.random() * langs.length)],
      timezone: timezones[Math.floor(Math.random() * timezones.length)],
      webDeviceInfo: {
        screenResolution: resolutions[Math.floor(Math.random() * resolutions.length)],
        userAgent: "Mozilla/5.0 (" + randomStr(8) + ") " + randomStr(6) + "/" + randomStr(4),
        canvasKey: randomHash(),
        webglKey: randomHash(),
        fontKey: randomHash(),
        audioKey: randomHash()
      }
    };
  }

  // ── 写 cookie 到浏览器 ────────────────────────────────────────
  function setCookie(name, value, days) {
    var expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + expires + "; path=/; SameSite=Lax";
  }

  // ── 发送 webreport，解析响应并将 nid/gvi 写入 cookie ────────────
  function fetchNid18() {
    var payload;
    try { payload = buildPayload(); } catch (e) { payload = {}; }

    fetch("/backend/api/webreport", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json;charset=UTF-8" },
      body: JSON.stringify(payload)
    })
      .then(function (res) { return res.json(); })
      .then(function (json) {
        console.log("[nid18] webreport returnCode:", json.returnCode);
        if (json.returnCode === "0" && json.data) {
          var data = json.data;
          if (data.nid) {
            // setCookie("nid18", data.nid, 90);
            setCookie("nid18", data.nid, 90);
            console.log("[nid18] nid18 已写入 cookie:", data.nid);
          }
          if (data.gvi) {
            setCookie("gviem", data.gvi, 90);
            console.log("[nid18] gviem 已写入 cookie:", data.gvi);
          }
        }
      })
      .catch(function (err) {
        console.warn("[nid18] webreport error:", err);
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fetchNid18);
  } else {
    fetchNid18();
  }
})();
