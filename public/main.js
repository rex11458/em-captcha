!(function (n) {
  var e = {};
  function t(r) {
    if (e[r]) return e[r].exports;
    var i = (e[r] = { i: r, l: !1, exports: {} });
    return (n[r].call(i.exports, i, i.exports, t), (i.l = !0), i.exports);
  }
  ((t.m = n),
    (t.c = e),
    (t.d = function (n, e, r) {
      t.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: r });
    }),
    (t.r = function (n) {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(n, "__esModule", { value: !0 }));
    }),
    (t.t = function (n, e) {
      if ((1 & e && (n = t(n)), 8 & e)) return n;
      if (4 & e && "object" == typeof n && n && n.__esModule) return n;
      var r = Object.create(null);
      if (
        (t.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: n }),
        2 & e && "string" != typeof n)
      )
        for (var i in n)
          t.d(
            r,
            i,
            function (e) {
              return n[e];
            }.bind(null, i),
          );
      return r;
    }),
    (t.n = function (n) {
      var e =
        n && n.__esModule
          ? function () {
              return n["default"];
            }
          : function () {
              return n;
            };
      return (t.d(e, "a", e), e);
    }),
    (t.o = function (n, e) {
      return Object.prototype.hasOwnProperty.call(n, e);
    }),
    (t.p = "//cfgpassport5.eastmoney.com/captcha/"),
    t((t.s = 19)));
})([
  function (n, e) {
    n.exports = jQuery;
  },
  function (n, e, t) {
    var r = t(2);
    "string" == typeof r && (r = [[n.i, r, ""]]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(16)(r, i);
    r.locals && (n.exports = r.locals);
  },
  function (n, e, t) {
    var r = t(3);
    (n.exports = t(4)(!1)).push([
      n.i,
      '.em_holder {\r\n    width: auto;\r\n    min-width: 280px;\r\n    background: transparent;\r\n    overflow: visible;\r\n    position: relative;\r\n    font-family: "Microsoft YaHei", Arial, "Hiragino Sans GB", sans-serif, SimSun !important;\r\n}\r\n\r\n.em_holder * {\r\n    -moz-box-sizing: content-box !important;\r\n    -webkit-box-sizing: content-box !important;\r\n    box-sizing: content-box !important;\r\n}\r\n\r\n.em_holder .em_hide {\r\n    display: none !important;\r\n}\r\n\r\n.em_holder .em_show {\r\n    opacity: 1;\r\n    display: block !important;\r\n}\r\n\r\n.em_holder a {\r\n    text-decoration: none;\r\n    background-color: transparent !important;\r\n    -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n.em_holder input {\r\n    padding: 0 !important;\r\n    margin: 0 !important;\r\n}\r\n\r\n.em_holder .em_data {\r\n    display: none;\r\n}\r\n\r\n.em_icon_point {\r\n    position: absolute;\r\n    width: 27px;\r\n    height: 36px;\r\n    background-image: url(' +
        r(t(5)) +
        ");\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.em_icon_point.point_1 {\r\n    background-position: 0 -144px;\r\n}\r\n\r\n.em_icon_point.point_2 {\r\n    background-position: 0 0;\r\n}\r\n\r\n.em_icon_point.point_3 {\r\n    background-position: 0 -108px;\r\n}\r\n\r\n.em_icon_point.point_4 {\r\n    background-position: 0 -72px;\r\n}\r\n\r\n.em_icon_point.point_5 {\r\n    background-position: 0 -36px;\r\n}\r\n\r\n/*#region init */\r\n\r\n.em_holder .em_init {\r\n    height: 36px;\r\n    width: auto;\r\n    min-width: 260px;\r\n    position: relative;\r\n    border: 1px solid #f3f3f3;\r\n    cursor: pointer;\r\n    overflow: visible;\r\n    background-color: #fff;\r\n    background-image: linear-gradient(180deg, #ffffff 0, #f3f3f3 100%);\r\n    padding-top: 6px;\r\n}\r\n\r\n.em_holder .em_init .em_init_icon {\r\n    position: relative;\r\n    left: 10px;\r\n    top: 5px;\r\n    /* margin:8px 0 0 10px; */\r\n    width: 20px;\r\n    height: 20px;\r\n    background: transparent;\r\n    background-image: url(" +
        r(t(6)) +
        ");\r\n    background-size: cover;\r\n    -moz-transition: all .2s linear;\r\n    -o-transition: all .2s linear;\r\n    -webkit-transition: all .2s linear;\r\n    transition: all .2s linear;\r\n    background: none\\9;\r\n    filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='https://cfgpassport.eastmoney.com/captcha/Content/img/icon_init.png', sizingMethod='scale');\r\n}\r\n\r\n.em_holder .em_init .em_init_guide_tip {\r\n    position: absolute;\r\n    left: 40px;\r\n    width: 180px;\r\n    height: 14px;\r\n    line-height: 14px !important;\r\n    font-size: 14px !important;\r\n    color: #474747;\r\n    opacity: 1;\r\n    filter: alpha(opacity=100);\r\n    padding-top: 3px;\r\n}\r\n\r\n.em_holder .em_init.loading {\r\n    border: 1px solid #f5f5f5;\r\n    background-image: none !important;\r\n    background-color: #ffffff !important;\r\n    cursor: default;\r\n}\r\n\r\n.em_holder .em_init.loading .em_init_icon {\r\n    background-image: url(" +
        r(t(7)) +
        ") !important;\r\n    background-size: cover;\r\n    -moz-transition: all .2s linear;\r\n    -o-transition: all .2s linear;\r\n    -webkit-transition: all .2s linear;\r\n    transition: all .2s linear;\r\n    background: none\\9 !important;\r\n    filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='https://cfgpassport.eastmoney.com/captcha/Content/img/icon_valid.png', sizingMethod='scale') !important;\r\n}\r\n\r\n.em_holder .em_init.loading .em_init_guide_tip {\r\n    color: #58B1FE !important;\r\n}\r\n\r\n.em_holder .em_init.abuse .em_init_icon {\r\n    background-image: url(" +
        r(t(8)) +
        ") !important;\r\n    background-size: cover;\r\n    -moz-transition: all .2s linear;\r\n    -o-transition: all .2s linear;\r\n    -webkit-transition: all .2s linear;\r\n    transition: all .2s linear;\r\n    background: none\\9 !important;\r\n    filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='https://cfgpassport.eastmoney.com/captcha/Content/img/icon_warning.png', sizingMethod='scale') !important;\r\n}\r\n\r\n.em_holder .em_init.success {\r\n    border: 1px solid #18A452;\r\n    background-image: none !important;\r\n    background-color: #EEFFF5 !important;\r\n    cursor: default;\r\n}\r\n\r\n.em_holder .em_init.success .em_init_icon {\r\n    background-image: url(" +
        r(t(9)) +
        ") !important;\r\n    background-size: cover;\r\n    -moz-transition: all .2s linear;\r\n    -o-transition: all .2s linear;\r\n    -webkit-transition: all .2s linear;\r\n    transition: all .2s linear;\r\n    background: none\\9 !important;\r\n    filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='https://cfgpassport.eastmoney.com/captcha/Content/img/icon_success.png', sizingMethod='scale') !important;\r\n}\r\n\r\n.em_holder .em_init.success .em_init_guide_tip {\r\n    color: #32b16c;\r\n}\r\n\r\n.em_holder .em_init:hover {\r\n    background-image: linear-gradient(0, #ffffff 0, #f3f3f3 100%);\r\n}\r\n\r\n.em_holder .em_init:hover .em_init_icon {\r\n    background-image: url(" +
        r(t(10)) +
        ");\r\n    background: none\\9;\r\n    filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='https://cfgpassport.eastmoney.com/captcha/Content/img/icon_init_hover.png', sizingMethod='scale');\r\n}\r\n\r\n/*#endregion */\r\n\r\n/*#region widget */\r\n\r\n.em_holder .em_widget {\r\n    width: 260px;\r\n    padding: 0 10px;\r\n    margin-top: 5px;\r\n    border: 1px solid #e4ddd1;\r\n    cursor: default !important;\r\n}\r\n\r\n.em_holder .em_widget .em_top {\r\n    padding: 10px 0;\r\n    width: 100%;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    color: #474747;\r\n    text-align: left;\r\n}\r\n\r\n.em_holder .em_widget .em_top .em_pic_tip {\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 5px;\r\n    height: 30px;\r\n    width: 120px;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n/*#region imgbox*/\r\n\r\n.em_holder .em_widget .em_box {\r\n    height: 116px;\r\n    width: 260px;\r\n    text-align: center;\r\n    position: relative;\r\n    border: 1px solid #cdcdcd;\r\n    background-color: #fff;\r\n    background-image: url(" +
        r(t(11)) +
        ");\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    overflow: hidden;\r\n}\r\n\r\n.em_holder .em_widget .em_bg {\r\n    display: inline-block;\r\n    margin: 0 !important;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    cursor: default !important;\r\n}\r\n\r\n.em_holder .em_widget .em_fullbg {\r\n    position: absolute;\r\n    display: block;\r\n    width: 260px;\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    margin: 0 !important;\r\n    cursor: default !important;\r\n}\r\n\r\n.em_holder .em_widget.em_shake {\r\n    animation: shake 0.5s;\r\n    -moz-animation: shake 0.5s;\r\n    -webkit-animation: shake 0.5s;\r\n    -o-animation: shake 0.5s;\r\n}\r\n\r\n.em_holder .em_slice {\r\n    position: absolute;\r\n    left: 0;\r\n    background-repeat: no-repeat;\r\n    width: 60px;\r\n    height: 60px;\r\n}\r\n\r\n.em_holder .em_slice.em_animate {\r\n    -webkit-transition: -webkit-transform 0.4s ease-in, left 0.4s ease-in, opacity 0.1s;\r\n    -moz-transition: transform 0.4s ease-in, left 0.4s ease-in, opacity 0.1s;\r\n    -o-transition: transform 0.4s ease-in, left 0.4s ease-in, opacity 0.1s;\r\n    transition: left 0.4s, opacity 0.1s;\r\n}\r\n\r\n.em_holder .em_slice.em_moving {\r\n    opacity: 0.9;\r\n}\r\n\r\n.em_holder .em_cut_fullbg,\r\n.em_holder .em_cut_bg {\r\n    height: 100%;\r\n}\r\n\r\n.em_holder .em_cut_fullbg.em_hide,\r\n.em_holder .em_cut_bg.em_hide {\r\n    display: none;\r\n}\r\n\r\n.em_holder .em_cut_fullbg_slice,\r\n.em_holder .em_cut_bg_slice {\r\n    float: left;\r\n    width: 10px;\r\n    height: 50%;\r\n    margin: 0 !important;\r\n}\r\n\r\n/*#endregion*/\r\n\r\n/*#endregion*/\r\n\r\n/*#region toolbar*/\r\n\r\n.em_holder .em_toolbar {\r\n    position: relative;\r\n    padding: 10px 0;\r\n    width: 100%;\r\n    height: 26px;\r\n}\r\n\r\n.em_holder .em_toolbar .em_bottom_tip {\r\n    display: none;\r\n    float: left;\r\n    margin-left: 5px;\r\n    color: red;\r\n    height: 20px;\r\n    line-height: 20px;\r\n    font-size: 12px;\r\n}\r\n\r\n.em_holder .em_toolbar .em_refresh_button {\r\n    float: right;\r\n    margin: 0 10px 0 0;\r\n    height: 26px;\r\n    width: 27px;\r\n    background-image: url(" +
        r(t(12)) +
        ");\r\n    background-repeat: no-repeat;\r\n    cursor: pointer;\r\n}\r\n\r\n.em_holder .em_toolbar .em_close_button {\r\n    display: none;\r\n    float: right;\r\n    height: 26px;\r\n    width: 26px;\r\n    background-image: url(" +
        r(t(13)) +
        ");\r\n    cursor: pointer;\r\n}\r\n\r\n.em_holder .em_toolbar .em_valid_btn {\r\n    float: left;\r\n    width: 80px;\r\n    height: 26px;\r\n    font-size: 16px;\r\n    color: #fff;\r\n    background-color: #ea5404 !important;\r\n    border-radius: 3px !important;\r\n    text-align: center;\r\n    line-height: 26px;\r\n    cursor: pointer;\r\n    letter-spacing: 5px;\r\n}\r\n\r\n.em_holder .em_word {\r\n    margin: 10px 0;\r\n    height: 30px;\r\n    width: 100%;\r\n}\r\n\r\n.em_holder .em_word .em_input {\r\n    height: 34px;\r\n    width: 100%;\r\n    background: #fff;\r\n    border: 1px solid #cdcdcd;\r\n    font-size: 18px;\r\n    line-height: 34px;\r\n}\r\n\r\n.em_holder .em_word .em_input:focus {\r\n    border: 1px solid #979797;\r\n}\r\n\r\n/*#endregion*/\r\n\r\n/*#region slider */\r\n\r\n.em_holder .em_slider {\r\n    padding: 20px 0 18px 0;\r\n    height: 38px;\r\n    width: 100%;\r\n    position: relative;\r\n    border-bottom: 1px solid #eeeeee;\r\n}\r\n\r\n.em_holder .em_slider .em_slider_track {\r\n    width: 260px;\r\n    height: 38px;\r\n    margin: 0;\r\n    background: #e4e4e4;\r\n    border-radius: 30px !important;\r\n    line-height: 38px;\r\n    text-indent: 65px;\r\n    color: #999;\r\n    font-size: 14px;\r\n}\r\n\r\n.em_holder .em_slider .em_slider_knob {\r\n    height: 69px;\r\n    width: 69px;\r\n    background-image: url(" +
        r(t(14)) +
        ");\r\n    background-repeat: no-repeat;\r\n    background-position-x: -7px;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 8px;\r\n    z-index: 399;\r\n}\r\n\r\n.em_holder .em_slider .em_slider_knob.em_animate {\r\n    animation: knob 0.5s;\r\n    -moz-animation: knob 0.5s;\r\n    -webkit-animation: knob 0.5s;\r\n    -o-animation: knob 0.5s;\r\n    /* -webkit-transition: left 0.4s ease-in, left 0.4s ease-in, opacity 0.5s;\r\n            -moz-transition: left 0.4s ease-in, left 0.4s ease-in, opacity 0.5s;\r\n            -o-transition: left 0.4s ease-in, left 0.4s ease-in, opacity 0.5s;\r\n            transition: left 0.4s ease-in, left 0.4s ease-in, opacity 0.5s; */\r\n}\r\n\r\n.em_holder .em_slider .em_slider_knob.em_hide {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n}\r\n\r\n.em_holder .em_slider .em_slider_knob.em_moving {\r\n    background-image: url(" +
        r(t(15)) +
        ");\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n/*#endregion*/\r\n\r\n/*#region info*/\r\n\r\n.em_holder .em_info {\r\n    display: none;\r\n    width: 260px;\r\n    height: auto;\r\n    position: absolute;\r\n    bottom: -1px;\r\n    left: 0;\r\n    z-index: 400;\r\n}\r\n\r\n.em_holder .em_info.em_show {\r\n    opacity: 1 !important;\r\n}\r\n\r\n.em_holder .em_info .em_info_tip {\r\n    padding: 7px 10px;\r\n    font-size: 14px !important;\r\n    color: #fff;\r\n    text-align: left;\r\n}\r\n\r\n.em_holder .em_info.error {\r\n    background-color: #f83030;\r\n}\r\n\r\n.em_holder .em_info.success {\r\n    background-color: #32b16c;\r\n}\r\n\r\n/* .em_holder .em_info.em_animate {\r\n        -moz-transition: opacity .2s linear;\r\n        -o-transition: opacity .2s linear;\r\n        -webkit-transition: opacity .2s linear;\r\n        transition: opacity .2s linear;\r\n    } */\r\n\r\n.em_holder .em_info.em_show.em_animate {\r\n    animation: infoShow 0.2s;\r\n    -moz-animation: infoShow 0.2s;\r\n    -webkit-animation: infoShow 0.2s;\r\n    -o-animation: infoShow 0.2s;\r\n}\r\n\r\n.em_holder .em_info.em_show.em_animate2 {\r\n    animation: infoHide 1s;\r\n    -moz-animation: infoHide 1s;\r\n    -webkit-animation: infoHide 1s;\r\n    -o-animation: infoHide 1s;\r\n}\r\n\r\n.em_holder .em_tooltip {\r\n    display: none;\r\n    position: absolute;\r\n    z-index: 1000;\r\n    top: -25px;\r\n}\r\n\r\n.em_holder .em_tooltip .em_tooltip_arrow {\r\n    height: 0;\r\n    width: 0;\r\n    margin-left: -5px;\r\n    position: absolute;\r\n    left: 50%;\r\n    bottom: -5px;\r\n    border: solid transparent;\r\n    border-width: 5px 5px 0;\r\n    border-top-color: #000;\r\n}\r\n\r\n.em_holder .em_tooltip .em_tooltip_inner {\r\n    max-width: 100px;\r\n    padding: 5px 8px;\r\n    color: #fff;\r\n    text-align: center;\r\n    background-color: #000;\r\n    border-radius: 4px;\r\n    font-size: 12px;\r\n    opacity: .9;\r\n    white-space: nowrap;\r\n}\r\n\r\n/*#endregion*/\r\n\r\n/*#region float */\r\n\r\n.em_float {}\r\n\r\n.em_float .em_widget {\r\n    position: absolute;\r\n    left: 42px !important;\r\n    top: -120px;\r\n    z-index: 999;\r\n    display: none;\r\n    background-color: #fff;\r\n    border-radius: 3px;\r\n    box-shadow: 0 0 10px #333;\r\n}\r\n\r\n.em_float .em_slider {\r\n    left: 0;\r\n}\r\n\r\n.em_float .em_close_button {\r\n    display: block;\r\n}\r\n\r\n.em_float .em_hide {\r\n    display: none;\r\n    opacity: 0;\r\n}\r\n\r\n.em_float .em_animate {\r\n    display: block;\r\n    opacity: 0;\r\n    -moz-transition: opacity 0.4s;\r\n    -o-transition: opacity 0.4s;\r\n    -webkit-transition: opacity 0.4s;\r\n    transition: opacity 0.4s;\r\n}\r\n\r\n.em_float .em_show {\r\n    opacity: 1;\r\n    display: block !important;\r\n    -ms-zoom: 1;\r\n    zoom: 1;\r\n    z-index: 999;\r\n}\r\n\r\n.em_float .em_point {\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    display: none;\r\n    z-index: 999;\r\n    left: 25px;\r\n    top: 13px;\r\n    border-top: 9px solid transparent;\r\n    border-left: 9px solid transparent;\r\n    border-bottom: 9px solid transparent;\r\n    border-right: 9px solid #fff;\r\n}\r\n\r\n/*#endregion */\r\n\r\n/*#region popup&bind */\r\n\r\n.em_popup {}\r\n\r\n.em_popup .em_mask,\r\n.em_bind .em_mask {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 998;\r\n    background-color: black;\r\n    opacity: 0.6;\r\n    filter: alpha(opacity=60);\r\n}\r\n\r\n.em_popup .em_widget,\r\n.em_bind .em_widget {\r\n    position: fixed;\r\n    left: calc(50% - 140px) !important;\r\n    top: 30%;\r\n    z-index: 999;\r\n    display: none;\r\n    background-color: #fff;\r\n    border: none;\r\n    border-radius: 3px;\r\n    box-shadow: 0 0 10px #333;\r\n}\r\n\r\n.em_bind {}\r\n\r\n.em_bind .em_init {\r\n    display: none !important;\r\n}\r\n\r\n/*#endregion */\r\n\r\n/*#region animation*/\r\n\r\n@keyframes knob {\r\n    0% {\r\n        opacity: 0;\r\n    }\r\n\r\n    100% {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes infoShow {\r\n    0% {\r\n        transform: translateY(20px);\r\n        opacity: 0;\r\n    }\r\n\r\n    50% {\r\n        opacity: 0;\r\n    }\r\n\r\n    100% {\r\n        transform: translateY(0);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes infoHide {\r\n    0% {\r\n        transform: translateY(0);\r\n        opacity: 1;\r\n    }\r\n\r\n    50% {\r\n        opacity: 0;\r\n    }\r\n\r\n    100% {\r\n        transform: translateY(20px);\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n@keyframes shake {\r\n    0% {\r\n        transform: translate(-1px);\r\n    }\r\n\r\n    10% {\r\n        transform: translate(1px);\r\n    }\r\n\r\n    20% {\r\n        transform: translate(-1px);\r\n    }\r\n\r\n    30% {\r\n        transform: translate(1px);\r\n    }\r\n\r\n    40% {\r\n        transform: translate(-1px);\r\n    }\r\n\r\n    50% {\r\n        transform: translate(1px);\r\n    }\r\n\r\n    60% {\r\n        transform: translate(-1px);\r\n    }\r\n\r\n    70% {\r\n        transform: translate(1px);\r\n    }\r\n\r\n    80% {\r\n        transform: translate(-1px);\r\n    }\r\n\r\n    90% {\r\n        transform: translate(1px);\r\n    }\r\n\r\n    100% {\r\n        transform: translate(-1px);\r\n    }\r\n}\r\n\r\n/*#endregion */",
      "",
    ]);
  },
  function (n, e) {
    n.exports = function (n) {
      return "string" != typeof n
        ? n
        : (/^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
          /["'() \t\n]/.test(n)
            ? '"' + n.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"'
            : n);
    };
  },
  function (n, e) {
    n.exports = function (n) {
      var e = [];
      return (
        (e.toString = function () {
          return this.map(function (e) {
            var t = (function (n, e) {
              var t = n[1] || "",
                r = n[3];
              if (!r) return t;
              if (e && "function" == typeof btoa) {
                var i =
                    ((a = r),
                    "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
                      " */"),
                  o = r.sources.map(function (n) {
                    return "/*# sourceURL=" + r.sourceRoot + n + " */";
                  });
                return [t].concat(o).concat([i]).join("\n");
              }
              var a;
              return [t].join("\n");
            })(e, n);
            return e[2] ? "@media " + e[2] + "{" + t + "}" : t;
          }).join("");
        }),
        (e.i = function (n, t) {
          "string" == typeof n && (n = [[null, n, ""]]);
          for (var r = {}, i = 0; i < this.length; i++) {
            var o = this[i][0];
            "number" == typeof o && (r[o] = !0);
          }
          for (i = 0; i < n.length; i++) {
            var a = n[i];
            ("number" == typeof a[0] && r[a[0]]) ||
              (t && !a[2]
                ? (a[2] = t)
                : t && (a[2] = "(" + a[2] + ") and (" + t + ")"),
              e.push(a));
          }
        }),
        e
      );
    };
  },
  function (n, e, t) {
    n.exports = t.p + "content/img/icon_light.png";
  },
  function (n, e, t) {
    n.exports = t.p + "content/img/icon_init.png";
  },
  function (n, e, t) {
    n.exports = t.p + "content/img/icon_valid.png";
  },
  function (n, e, t) {
    n.exports = t.p + "content/img/icon_warning.png";
  },
  function (n, e, t) {
    n.exports = t.p + "content/img/icon_success.png";
  },
  function (n, e, t) {
    n.exports = t.p + "content/img/icon_init_hover.png";
  },
  function (n, e, t) {
    n.exports = t.p + "content/img/icon_loading.gif";
  },
  function (n, e, t) {
    n.exports = t.p + "content/img/icon_refresh.png";
  },
  function (n, e, t) {
    n.exports = t.p + "content/img/icon_close.png";
  },
  function (n, e, t) {
    n.exports = t.p + "content/img/icon_slide.png";
  },
  function (n, e, t) {
    n.exports = t.p + "content/img/icon_move.png";
  },
  function (n, e, t) {
    var r,
      i,
      o = {},
      a =
        ((r = function () {
          return window && document && document.all && !window.atob;
        }),
        function () {
          return (void 0 === i && (i = r.apply(this, arguments)), i);
        }),
      s = function (n, e) {
        return e ? e.querySelector(n) : document.querySelector(n);
      },
      c = (function (n) {
        var e = {};
        return function (n, t) {
          if ("function" == typeof n) return n();
          if (void 0 === e[n]) {
            var r = s.call(this, n, t);
            if (
              window.HTMLIFrameElement &&
              r instanceof window.HTMLIFrameElement
            )
              try {
                r = r.contentDocument.head;
              } catch (n) {
                r = null;
              }
            e[n] = r;
          }
          return e[n];
        };
      })(),
      l = null,
      d = 0,
      u = [],
      p = t(17);
    function f(n, e) {
      for (var t = 0; t < n.length; t++) {
        var r = n[t],
          i = o[r.id];
        if (i) {
          i.refs++;
          for (var a = 0; a < i.parts.length; a++) i.parts[a](r.parts[a]);
          for (; a < r.parts.length; a++) i.parts.push(v(r.parts[a], e));
        } else {
          var s = [];
          for (a = 0; a < r.parts.length; a++) s.push(v(r.parts[a], e));
          o[r.id] = { id: r.id, refs: 1, parts: s };
        }
      }
    }
    function m(n, e) {
      for (var t = [], r = {}, i = 0; i < n.length; i++) {
        var o = n[i],
          a = e.base ? o[0] + e.base : o[0],
          s = { css: o[1], media: o[2], sourceMap: o[3] };
        r[a] ? r[a].parts.push(s) : t.push((r[a] = { id: a, parts: [s] }));
      }
      return t;
    }
    function g(n, e) {
      var t = c(n.insertInto);
      if (!t)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.",
        );
      var r = u[u.length - 1];
      if ("top" === n.insertAt)
        (r
          ? r.nextSibling
            ? t.insertBefore(e, r.nextSibling)
            : t.appendChild(e)
          : t.insertBefore(e, t.firstChild),
          u.push(e));
      else if ("bottom" === n.insertAt) t.appendChild(e);
      else {
        if ("object" != typeof n.insertAt || !n.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n",
          );
        var i = c(n.insertAt.before, t);
        t.insertBefore(e, i);
      }
    }
    function h(n) {
      if (null === n.parentNode) return !1;
      n.parentNode.removeChild(n);
      var e = u.indexOf(n);
      e >= 0 && u.splice(e, 1);
    }
    function _(n) {
      var e = document.createElement("style");
      if (
        (void 0 === n.attrs.type && (n.attrs.type = "text/css"),
        void 0 === n.attrs.nonce)
      ) {
        var r = (function () {
          0;
          return t.nc;
        })();
        r && (n.attrs.nonce = r);
      }
      return (b(e, n.attrs), g(n, e), e);
    }
    function b(n, e) {
      Object.keys(e).forEach(function (t) {
        n.setAttribute(t, e[t]);
      });
    }
    function v(n, e) {
      var t, r, i, o;
      if (e.transform && n.css) {
        if (
          !(o =
            "function" == typeof e.transform
              ? e.transform(n.css)
              : e.transform["default"](n.css))
        )
          return function () {};
        n.css = o;
      }
      if (e.singleton) {
        var a = d++;
        ((t = l || (l = _(e))),
          (r = w.bind(null, t, a, !1)),
          (i = w.bind(null, t, a, !0)));
      } else
        n.sourceMap &&
        "function" == typeof URL &&
        "function" == typeof URL.createObjectURL &&
        "function" == typeof URL.revokeObjectURL &&
        "function" == typeof Blob &&
        "function" == typeof btoa
          ? ((t = (function (n) {
              var e = document.createElement("link");
              return (
                void 0 === n.attrs.type && (n.attrs.type = "text/css"),
                (n.attrs.rel = "stylesheet"),
                b(e, n.attrs),
                g(n, e),
                e
              );
            })(e)),
            (r = S.bind(null, t, e)),
            (i = function () {
              (h(t), t.href && URL.revokeObjectURL(t.href));
            }))
          : ((t = _(e)),
            (r = k.bind(null, t)),
            (i = function () {
              h(t);
            }));
      return (
        r(n),
        function (e) {
          if (e) {
            if (
              e.css === n.css &&
              e.media === n.media &&
              e.sourceMap === n.sourceMap
            )
              return;
            r((n = e));
          } else i();
        }
      );
    }
    n.exports = function (n, e) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
        throw new Error(
          "The style-loader cannot be used in a non-browser environment",
        );
      (((e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}),
        e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()),
        e.insertInto || (e.insertInto = "head"),
        e.insertAt || (e.insertAt = "bottom"));
      var t = m(n, e);
      return (
        f(t, e),
        function (n) {
          for (var r = [], i = 0; i < t.length; i++) {
            var a = t[i];
            ((s = o[a.id]).refs--, r.push(s));
          }
          n && f(m(n, e), e);
          for (i = 0; i < r.length; i++) {
            var s;
            if (0 === (s = r[i]).refs) {
              for (var c = 0; c < s.parts.length; c++) s.parts[c]();
              delete o[s.id];
            }
          }
        }
      );
    };
    var x,
      y =
        ((x = []),
        function (n, e) {
          return ((x[n] = e), x.filter(Boolean).join("\n"));
        });
    function w(n, e, t, r) {
      var i = t ? "" : r.css;
      if (n.styleSheet) n.styleSheet.cssText = y(e, i);
      else {
        var o = document.createTextNode(i),
          a = n.childNodes;
        (a[e] && n.removeChild(a[e]),
          a.length ? n.insertBefore(o, a[e]) : n.appendChild(o));
      }
    }
    function k(n, e) {
      var t = e.css,
        r = e.media;
      if ((r && n.setAttribute("media", r), n.styleSheet))
        n.styleSheet.cssText = t;
      else {
        for (; n.firstChild; ) n.removeChild(n.firstChild);
        n.appendChild(document.createTextNode(t));
      }
    }
    function S(n, e, t) {
      var r = t.css,
        i = t.sourceMap,
        o = void 0 === e.convertToAbsoluteUrls && i;
      ((e.convertToAbsoluteUrls || o) && (r = p(r)),
        i &&
          (r +=
            "\n/*# sourceMappingURL=data:application/json;base64," +
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
            " */"));
      var a = new Blob([r], { type: "text/css" }),
        s = n.href;
      ((n.href = URL.createObjectURL(a)), s && URL.revokeObjectURL(s));
    }
  },
  function (n, e) {
    n.exports = function (n) {
      var e = "undefined" != typeof window && window.location;
      if (!e) throw new Error("fixUrls requires window.location");
      if (!n || "string" != typeof n) return n;
      var t = e.protocol + "//" + e.host,
        r = t + e.pathname.replace(/\/[^\/]*$/, "/");
      return n.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function (n, e) {
          var i,
            o = e
              .trim()
              .replace(/^"(.*)"$/, function (n, e) {
                return e;
              })
              .replace(/^'(.*)'$/, function (n, e) {
                return e;
              });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)
            ? n
            : ((i =
                0 === o.indexOf("//")
                  ? o
                  : 0 === o.indexOf("/")
                    ? t + o
                    : r + o.replace(/^\.\//, "")),
              "url(" + JSON.stringify(i) + ")");
        },
      );
    };
  },
  ,
  function (n, e, t) {
    "use strict";
    t.r(e);
    var r = t(0),
      i = t.n(r),
      o = {
        copy: function (n, e) {
          var t = e || {};
          for (var r in n) t[r] = n[r];
          return t;
        },
        toParam: function (n) {
          var e = [];
          for (var t in n)
            if (n.hasOwnProperty(t)) {
              var r = typeof n[t];
              ("number" !== r && "string" !== r && "boolean" !== r) ||
                e.push(t + "=" + n[t]);
            }
          return e.join("&");
        },
        isFunction: function (n) {
          return "function" == typeof n;
        },
        random: function () {
          return parseInt(1e4 * Math.random()) + new Date().valueOf();
        },
        inArray: function (n, e) {
          for (var t = 0; t < e.length; t++) if (e[t] == n) return t;
          return -1;
        },
        removeProperty: function (n, e) {
          n[e] = void 0;
          try {
            delete n[e];
          } catch (n) {}
        },
        slice: function (n, e) {
          return n.slice(e);
        },
        arrayEqual: function (n, e) {
          if (n === e) return !0;
          if (null == n || null == e) return !1;
          if (n.length != e.length) return !1;
          for (var t = 0; t < n.length; t++) if (n[t] !== e[t]) return !1;
          return !0;
        },
        diff: function (n, e) {
          for (var t = [], r = 0; r < n.length; r++) t.push(n[r] - e[r]);
          return t;
        },
        isArray: function (n) {
          return Array.isArray
            ? Array.isArray(n)
            : "[object Array]" === Object.prototype.toString.call(n);
        },
        log: function (n) {
          try {
            console && console.log(n);
          } catch (n) {}
        },
      };
    ((o.Utility = {
      map: function (n, e) {
        var t;
        if (o.isArray(n)) {
          t = [];
          for (var r = 0; r < n.length; r++) t[r] = e(r, n[r]);
        } else
          for (var i in ((t = {}), n))
            n.hasOwnProperty(i) && (t[i] = e(i, n[i]));
        return t;
      },
      getLength: function (n) {
        var e = 0;
        if (o.isArray(n)) e = n.length;
        else for (var t in n) n.hasOwnProperty(t) && (e += 1);
        return e;
      },
    }),
      (o.base64Encode = function (n) {
        if (window.btoa) return window.btoa(n);
        var e =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
            "",
          );
        return (function (n) {
          var t, r, i, o, a, s, c;
          for (
            r = i = 0,
              o = n.length,
              s = ((o -= a = o % 3) / 3) << 2,
              a > 0 && (s += 4),
              t = new Array(s);
            r < o;
          )
            ((c =
              (n.charCodeAt(r++) << 16) |
              (n.charCodeAt(r++) << 8) |
              n.charCodeAt(r++)),
              (t[i++] =
                e[c >> 18] + e[(c >> 12) & 63] + e[(c >> 6) & 63] + e[63 & c]));
          return (
            1 == a
              ? ((c = n.charCodeAt(r++)),
                (t[i++] = e[c >> 2] + e[(3 & c) << 4] + "=="))
              : 2 == a &&
                ((c = (n.charCodeAt(r++) << 8) | n.charCodeAt(r++)),
                (t[i++] =
                  e[c >> 10] + e[(c >> 4) & 63] + e[(15 & c) << 2] + "=")),
            t.join("")
          );
        })(n);
      }),
      (o.encrypt = function (n) {
        var e,
          t = "e98ae8878c264a7e";
        function r(n) {
          if (/^[\x00-\x7f]*$/.test(n)) return n;
          for (var e = [], t = n.length, r = 0, i = 0; r < t; ++r, ++i) {
            var o = n.charCodeAt(r);
            if (o < 128) e[i] = n.charAt(r);
            else if (o < 2048)
              e[i] = String.fromCharCode(192 | (o >> 6), 128 | (63 & o));
            else {
              if (!(o < 55296 || o > 57343)) {
                if (r + 1 < t) {
                  var a = n.charCodeAt(r + 1);
                  if (o < 56320 && 56320 <= a && a <= 57343) {
                    var s = 65536 + (((1023 & o) << 10) | (1023 & a));
                    ((e[i] = String.fromCharCode(
                      240 | ((s >> 18) & 63),
                      128 | ((s >> 12) & 63),
                      128 | ((s >> 6) & 63),
                      128 | (63 & s),
                    )),
                      ++r);
                    continue;
                  }
                }
                throw new Error("Malformed string");
              }
              e[i] = String.fromCharCode(
                224 | (o >> 12),
                128 | ((o >> 6) & 63),
                128 | (63 & o),
              );
            }
          }
          return e.join("");
        }
        function i(n) {
          return 4294967295 & n;
        }
        function o(n, e, t, r, i, o) {
          return (
            (((t >>> 5) ^ (e << 2)) + ((e >>> 3) ^ (t << 4))) ^
            ((n ^ e) + (o[(3 & r) ^ i] ^ t))
          );
        }
        function a(n, e) {
          var t,
            r = n.length,
            i = r >> 2;
          (0 != (3 & r) && ++i,
            e ? ((t = new Array(i + 1))[i] = r) : (t = new Array(i)));
          for (var o = 0; o < r; ++o)
            t[o >> 2] |= n.charCodeAt(o) << ((3 & o) << 3);
          return t;
        }
        return null == n || 0 === n.length
          ? n
          : ((n = r(n)),
            (t = r(t)),
            (function (n, e) {
              var t = n.length,
                r = t << 2;
              if (e) {
                var i = n[t - 1];
                if (i < (r -= 4) - 3 || i > r) return null;
                r = i;
              }
              for (var o = 0; o < t; o++)
                n[o] = String.fromCharCode(
                  255 & n[o],
                  (n[o] >>> 8) & 255,
                  (n[o] >>> 16) & 255,
                  (n[o] >>> 24) & 255,
                );
              var a = n.join("");
              return e ? a.substring(0, r) : a;
            })(
              (function (n, e) {
                var t,
                  r,
                  a,
                  s,
                  c,
                  l,
                  d = n.length,
                  u = d - 1;
                for (
                  r = n[u], a = 0, l = 0 | Math.floor(6 + 52 / d);
                  l > 0;
                  --l
                ) {
                  for (
                    s = ((a = i(a + 2654435769)) >>> 2) & 3, c = 0;
                    c < u;
                    ++c
                  )
                    ((t = n[c + 1]),
                      (r = n[c] = i(n[c] + o(a, t, r, c, s, e))));
                  ((t = n[0]), (r = n[u] = i(n[u] + o(a, t, r, u, s, e))));
                }
                return n;
              })(a(n, !0), ((e = a(t, !1)).length < 4 && (e.length = 4), e)),
              !1,
            ));
      }),
      (o.Guid = function () {
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(
          /[xy]/g,
          function (n) {
            var e = (16 * Math.random()) | 0;
            return ("x" == n ? e : (3 & e) | 8).toString(16);
          },
        );
      }));
    var a = o,
      s = {
        _list: {},
        Init: function (n, e) {
          ((s._list[n] = {}), (s._list[n].self = e));
        },
        Set: function (n, e, t) {
          return ((s._list[t][n] = e), e);
        },
        Get: function (n, e) {
          try {
            return s._list[e][n];
          } catch (e) {
            a.log("no match data:" + n);
          }
        },
        Delete: function (n) {
          s._list[n] = void 0;
        },
      },
      c = s,
      l = {
        _list: { global: {} },
        Init: function (n) {
          l._list[n] = {};
        },
        Bind: function (n, e, t) {
          t
            ? (l._list[t][n] || (l._list[t][n] = []),
              l._list[t][n].push({ once: !1, callback: e }))
            : (l._list.global[n] || (l._list.global[n] = []),
              l._list.global[n].push({ once: !1, callback: e }));
        },
        OnceBind: function (n, e, t) {
          t
            ? (l._list[t][n] || (l._list[t][n] = []),
              l._list[t][n].push({ once: !0, callback: e }))
            : (l._list.global[n] || (l._list.global[n] = []),
              l._list.global[n].push({ once: !0, callback: e }));
        },
        Remove: function (n, e, t) {
          var r = t ? l._list[t][n] : l._list.global[n];
          r.splice(a.inArray(e, r), 1);
        },
        Exec: function (n, e) {
          var t,
            r = l._list[e][n];
          if (r)
            for (var i = 0; i < r.length; i++)
              r[i] &&
                ((t = r[i]).callback.call(c.Get("self", e)),
                t.once && (l.Remove(n, t, e), (i -= 1)));
        },
        ExecGlobal: function (n) {
          var e,
            t = l._list.global[key];
          if (t)
            for (var r = 0; r < t.length; r++)
              t[r] &&
                ((e = t[r]).callback.call(),
                e.once && (l.Remove(key, e), (r -= 1)));
        },
        Delete: function (n) {
          l._list[n] = void 0;
        },
      },
      d = l,
      u = {
        evts: {
          down: ["mousedown", "touchstart"],
          move: ["mousemove", "touchmove"],
          up: ["mouseup", "touchend"],
          enter: ["mouseover"],
          cancel: ["touchcancel"],
          scroll: ["scroll"],
          click: ["click"],
          keypress: ["keypress"],
          blur: ["blur"],
          focus: ["focus"],
          unload: ["unload"],
          change: ["input", "propertychange"],
          leave: ["mouseleave"],
        },
        Bind: function (n, e, t) {
          for (var r = u.evts[e], o = 0; o < r.length; o++)
            i()(n).off(r[o]).on(r[o], t);
        },
        unBind: function (n, e, t) {
          for (var r = u.evts[e], o = 0; o < r.length; o++) i()(n).off(r[o]);
        },
      },
      p = u,
      f = {
        errors: {
          initError: "鍒濆鍖栦紶鍙傞敊璇�",
          callbackError: "鍥炶皟鎺ュ彛鍙傛暟蹇呴』涓哄嚱鏁�",
        },
        defaultConfig: {
          id: "",
          containerId: "",
          appid: "",
          captchaContextId: "",
          account: "",
          password: "",
          fullbg: "",
          bg: "",
          slice: "",
          xpos: 0,
          ypos: 0,
          product: "popup",
          https: !1,
          api_server: "https://smartvcode5.eastmoney.com/Titan/",
          static_servers: [],
          retry: 0,
          count: 0,
          point_statck: [],
          height: 116,
          status: 0,
        },
        getResource: function (n, e, t) {
          var r = n.config.static_servers[0];
          "function" != typeof t && (t = function () {});
          var i;
          e.indexOf(".png") > -1 ||
          e.indexOf(".jpg") > -1 ||
          e.indexOf(".webp") > -1 ||
          e.indexOf(".svg") > -1
            ? (function (n, e) {
                var t = document.createElement("img");
                ((t.onerror = function () {
                  (e(!0, t), (t.onerror = null));
                }),
                  (t.onload = t.onreadystatechange =
                    function () {
                      (t.readyState &&
                        "loaded" !== t.readyState &&
                        "complete" !== t.readyState) ||
                        (e(!1, t), (t.onload = t.onreadystatechange = null));
                    }),
                  (t.src = n));
              })(
                (-1 === (i = e).indexOf("pictures/") && (i = "/" + i),
                0 !== (i = i.replace(/\/+/g, "/")).indexOf("/") &&
                  (i = "/" + i),
                (n.config.https ? "https://" : "http://") +
                  r.replace(/^https?:\/\/|\/$/g, "") +
                  i),
                function (n, e) {
                  n || t(!1, e);
                },
              )
            : a.log("no such resource: " + e);
        },
        getLang: function () {
          return {
            loading: "鍔犺浇涓�...",
            slide: "鎸変綇宸﹁竟婊戝潡锛屾嫋鍔ㄥ畬鎴愪笂鏂规嫾鍥�",
            top_tip: {
              init: "",
              slide: "鎷栧姩涓嬫柟婊戝潡瀹屾垚鎷煎浘",
              word: "杈撳叆鍥剧墖涓殑楠岃瘉鐮�",
              click:
                "璇峰湪涓嬪浘<span style='color:#286eff'>渚濇</span>鐐瑰嚮",
            },
            click: "渚濇閫変腑鎻愮ず姹夊瓧",
            init: "灏濊瘯澶鐐瑰嚮杩涜閲嶈瘯",
            fail: {
              slide: "璇锋嫋鍔ㄦ粦鍧楀皢鎮诞鍥惧儚姝ｇ‘鎷煎悎",
              word: "璇疯緭鍏ユ纭殑楠岃瘉鐮�",
              click: "璇蜂緷娆￠€変腑鐩稿簲鏂囧瓧",
            },
            success: ["楠岃瘉鎴愬姛"],
            abuse: "灏濊瘯娆℃暟杩囧",
            stop: "璇峰埛鏂伴〉闈㈠悗閲嶆柊寮€濮嬮獙璇�",
            error: "璇峰叧闂獙璇侀噸璇�",
            validBtn: "纭畾",
            strackInfo: "鎷栧姩宸﹁竟婊戝潡瀹屾垚涓婃柟鎷煎浘",
          };
        },
      },
      m = f,
      g =
        ("transition" in document.documentElement.style ||
          "webkitTransition" in document.documentElement.style ||
          "mozTransition" in document.documentElement.style ||
          document.documentElement.style,
        "animation" in document.documentElement.style ||
          "webkitAnimation" in document.documentElement.style ||
          "mozAnimation" in document.documentElement.style ||
          "msAnimation" in document.documentElement.style),
      h = {
        Hide: function (n, e, t) {
          var r = function () {
            g && e
              ? (i()(n).addClass("em_animate2"),
                setTimeout(function () {
                  (i()(n).removeClass("em_show"),
                    i()(n).removeClass("em_animate2"));
                }, e),
                i()(n).addClass("em_hide"))
              : (i()(n).removeClass("em_show"), i()(n).addClass("em_hide"));
          };
          return t ? setTimeout(r, t) : void r();
        },
        Show: function (n, e, t) {
          var r = function () {
            g && e
              ? (i()(n).removeClass("em_hide"),
                i()(n).addClass("em_show"),
                i()(n).addClass("em_animate"),
                setTimeout(function () {
                  i()(n).removeClass("em_animate");
                }, e))
              : (i()(n).removeClass("em_hide"), i()(n).addClass("em_show"));
          };
          return t ? setTimeout(r, t) : void r();
        },
        Animate: function (n, e, t, r) {
          var o = function () {
            g && e
              ? (i()(n).addClass("em_animate"),
                "function" == typeof r && r(),
                setTimeout(function () {
                  i()(n).removeClass("em_animate");
                }, e))
              : "function" == typeof r && r();
          };
          return t ? setTimeout(o, t) : void o();
        },
      },
      _ = h,
      b = {
        ShowResult: function (n, e) {
          if ("click" === e.config.type) {
            for (var t; (t = e.config.point_statck.pop()); )
              e.$(".em_fullbg").removeChild(t.el);
            "success" !== n && (e.config.count = 0);
          }
          var r = e.$(".em_info");
          if ((_.Hide(r), "success" == n)) {
            ((r.className = "em_info success"),
              (e.$(".em_info_tip").innerHTML = m.getLang()[n]),
              _.Show(r, 200),
              _.Hide(r, 300, 2e3),
              (e.$(".em_init").className = "em_init success"),
              (e.$(".em_init_guide_tip").innerText = "楠岃瘉鎴愬姛"));
          } else {
            ($(".em_widget").addClass("em_shake"),
              setTimeout(function () {
                $(".em_widget").removeClass("em_shake");
              }, 500),
              (r.className = "em_info error"),
              (e.$(".em_info_tip").innerHTML =
                "fail" == n
                  ? "楠岃瘉澶辫触 " + m.getLang()[n][e.config.type]
                  : m.getLang()[n]),
              "stop" == n &&
                ((e.$(".em_init").className = "em_init abuse"),
                (e.$(".em_init_guide_tip").innerText = m.getLang()[n])),
              _.Show(r, 200),
              "stop" != n && _.Hide(r, 200, 2e3));
          }
        },
      },
      v = b,
      x = {
        RecordStart: function (n, e) {
          c.Set("arr", [n], e);
        },
        RecordMouse: function (n, e) {
          c.Get("arr", e).push(n);
        },
        GetRecord: function (n) {
          var e = c.Get("arr", n);
          return (
            e.length > 400 && (e = e.slice(0, 400)),
            i.a
              .map(e, function (n) {
                return n.join(",");
              })
              .join(":")
          );
        },
      },
      y = x,
      w = {};
    w.Clear = function (n) {
      var e = n(".em_fullbg"),
        t = (n(".em_cut_fullbg"), n(".em_bg")),
        r = (n(".em_cut_bg"), n(".em_slice"));
      ((e.style.backgroundImage = "none"),
        (t.style.backgroundImage = "none"),
        (r.style.backgroundImage = "none"),
        _.Hide(e),
        _.Hide(t),
        _.Hide(r),
        _.Hide(n(".em_cut_fullbg")),
        _.Hide(n(".em_cut_bg")));
    };
    var k = function (n, e, t, r, i) {
      if (e) {
        var o = [];
        if (c.Get(n + "Arr", i.id)) {
          for (l = 0, d = (o = c.Get(n + "Arr", i.id)).length; l < d; l++)
            o[l].style.backgroundImage = "url(" + e + ")";
        } else {
          c.Set(n + "Arr", o, i.id);
          var a = (function () {
              for (
                var n,
                  e = "6_11_7_10_4_12_3_1_0_5_2_9_8".split("_"),
                  t = [],
                  r = 0;
                r < 52;
                r++
              )
                ((n = 2 * parseInt(e[parseInt((r % 26) / 2)]) + (r % 2)),
                  parseInt(r / 2) % 2 || (n += r % 2 ? -1 : 1),
                  (n += r < 26 ? 26 : 0),
                  t.push(n));
              return t;
            })(),
            s = document.createElement("div");
          s.className = "em_cut_" + n + "_slice";
          for (var l = 0, d = a.length; l < d; l++) {
            var u =
                "-" +
                ((a[l] % 26) * 12 + 1) +
                "px " +
                (a[l] <= 25 ? (0 - i.config.height) / 2 : 0) +
                "px",
              p = s.cloneNode();
            ((p.style.backgroundImage = "url(" + e + ")"),
              o.push(p),
              r.appendChild(p),
              (p.style.backgroundPosition = u));
          }
        }
        _.Show(i.$(".em_cut_" + n));
      }
    };
    w.DecodeImg = function (n, e, t, r) {
      (w.Clear(t.$),
        n && k("fullbg", n, t.$(".em_fullbg"), t.$(".em_cut_fullbg"), t),
        "slide" == t.config.type &&
          k("bg", e, t.$(".em_bg"), t.$(".em_cut_bg"), t),
        setTimeout(function () {
          !(function (n, e) {
            var t = 300;
            (e && (t = 0),
              _.Show(n.$(".em_fullbg"), t),
              "slide" == n.config.type &&
                (_.Show(n.$(".em_bg")), _.Show(n.$(".em_slice"))));
          })(t, r);
        }, 100));
    };
    var S = w,
      C = function (n, e, t) {
        var r = "emcapt_" + a.random();
        if (
          ((window[r] = function (n) {
            (e.call(t, n), a.removeProperty(window, r));
          }),
          t.config.status < 0)
        ) {
          window[r]({ success: !0, message: "success" });
        } else {
          var o =
            "appid=" +
            n.appid +
            "|ctxid=" +
            n.ctxid +
            "|type=" +
            n.type +
            "|u=" +
            n.userresponse +
            "|d=" +
            n.data +
            "|a=" +
            t.config.account +
            "|p=" +
            t.config.password +
            "|t=" +
            (c.Get("endTime", t.id) - c.Get("startTime", t.id)) +
            "|r=" +
            Math.random();
          i.a.ajax({
            url: t.config.api_server + "api/captcha/Validate",
            data: { ctxid: n.ctxid, request: a.base64Encode(a.encrypt(o)) },
            type: "get",
            cache: !1,
            dataType: "jsonp",
            jsonpCallback: "cb",
            success: function (n) {
              var e = n.Data ? n.Data.Result : {};
              ("string" == typeof (e = e || {}) && (e = i.a.parseJSON(e)),
                "0" == n.ReturnCode
                  ? ((e.success = !0), (e.message = "success"))
                  : "5" == n.ReturnCode
                    ? ((e.success = !1), (e.message = "upgrade"))
                    : "3" == n.ReturnCode
                      ? ((e.success = !1), (e.message = "abuse"))
                      : "10" == n.ReturnCode || "11" == n.ReturnCode
                        ? ((e.success = !1), (e.message = "stop"))
                        : "2" == n.ReturnCode || "7" == n.ReturnCode
                          ? ((e.success = !1), (e.message = "fail"))
                          : ((e.success = !1), (e.message = "error")),
                window[r](e));
            },
            error: function (n) {
              var e = { success: !1, message: "error" };
              window[r](e);
            },
          });
        }
      },
      T = function (n, e, t, r) {
        if (n.config.retry > 3)
          return (a.log("can not load imgs"), void d.Exec("error", n.id));
        (e && (n.config.account = i.a.trim(e)), t && (n.config.password = t));
        var o = c.Get("status", n.id);
        if (
          "ready" === o ||
          "success" === o ||
          "auto" === o ||
          "error" === o ||
          "process" === o ||
          "init" === o ||
          "new" === o
        ) {
          if (n.config.status < 0)
            return (
              (n.config.type = "init"),
              i()("#" + n.config.containerId).html(""),
              n.appendTo("#" + n.config.containerId),
              void ("function" == typeof r && r.call())
            );
          "new" != o &&
            (d.Exec("statusChange", n.id),
            c.Set("status", "lock", n.id),
            S.Clear(n.$));
          var s = c.Get("onRefresh", n.id);
          "function" == typeof s && s.call(n);
          var l = i()("#" + n.config.containerId + " .context").val();
          l && (n.config.captchaContextId = l);
          var u =
            "appid=" +
            n.config.appid +
            "|ctxid=" +
            n.config.captchaContextId +
            "|a=" +
            n.config.account +
            "|p=" +
            n.config.password +
            "|r=" +
            Math.random();
          i.a.ajax({
            url: n.config.api_server + "api/captcha/get",
            data: {
              ctxid: n.config.captchaContextId,
              request: a.base64Encode(a.encrypt(u)),
            },
            type: "get",
            cache: !1,
            dataType: "jsonp",
            jsonpCallback: "cb",
            success: function (e) {
              if ("0" == e.ReturnCode) {
                var t = e.Data.CaptchaInfo;
                ("string" == typeof t && (t = i.a.parseJSON(t)),
                  (t = i.a.extend({}, n.config, t)),
                  (n = new B(t, n)),
                  i()("#" + n.config.containerId).html(""),
                  n.appendTo("#" + n.config.containerId),
                  "function" == typeof r && r.call());
              } else
                "4" == e.ReturnCode
                  ? (v.ShowResult("abuse", n),
                    setTimeout(function () {
                      M.Abuse(n);
                    }, 500))
                  : "10" == e.ReturnCode || "11" == e.ReturnCode
                    ? (c.Set("status", "lock", n.id),
                      n &&
                        n.$ &&
                        (d.Exec("error", n.id), v.ShowResult("stop", n)))
                    : d.Exec("error", n.id);
            },
            error: function () {
              d.Exec("error", n.id);
            },
          });
        }
      },
      I = function (n) {
        if ("abuse" === c.Get("status", n.id)) {
          var e =
            "appid=" +
            n.config.appid +
            "|ctxid=" +
            n.config.captchaContextId +
            "|a=" +
            n.config.account +
            "|r=" +
            Math.random();
          i.a.ajax({
            url: n.config.api_server + "api/captcha/reset",
            data: {
              ctxid: n.config.captchaContextId,
              request: a.base64Encode(a.encrypt(e)),
            },
            type: "get",
            cache: !1,
            dataType: "jsonp",
            jsonpCallback: "cb",
            success: function (e) {
              if ("0" == e.ReturnCode) {
                var t = e.Data.CaptchaContextId;
                ((n.config.captchaContextId = t),
                  (n.$(".context").value = t),
                  c.Set("status", "auto", n.id),
                  T(n));
              } else M.Abuse(n);
            },
            error: function () {
              M.Abuse(n);
            },
          });
        }
      },
      R = function () {
        var n = c.Get("onError", this.id);
        ("function" == typeof n && n.call(this),
          c.Set("status", "error", this.id),
          d.Exec("statusChange", this.id),
          this.$ && v.ShowResult("error", this));
      },
      E = {
        ValidCallBack: function (n) {
          var e = this,
            t = e.$(".em_slice"),
            r = e.$(".em_slider_knob");
          if (n.success) {
            ("word" === e.config.type &&
              i()(".em_input").attr("disabled", "disabled"),
              c.Set("score", n.score, e.id),
              _.Hide(e.$(".em_refresh_button"), 400),
              _.Show(e.$(".em_fullbg"), 1500),
              v.ShowResult("success", e),
              (e.$(".validate").value = n.validate),
              c.Set("status", "success", e.id),
              d.Exec("statusChange", e.id),
              ("float" != e.config.product &&
                "popup" != e.config.product &&
                "bind" != e.config.product) ||
                setTimeout(function () {
                  G.WidgetHide(e);
                }, 1e3));
            var o = c.Get("onSuccess", e.id);
            "function" == typeof o && o.call(e);
          } else
            "fail" == n.message
              ? (v.ShowResult("fail", e),
                "slide" == e.config.type &&
                  (_.Hide(t, 100),
                  _.Show(t, 100, 100),
                  _.Hide(t, 100, 200),
                  _.Show(t, 100, 300)),
                setTimeout(function () {
                  ("slide" == e.config.type &&
                    (_.Animate(t, 400, 500, function () {
                      E.SetSlidePosition(0, e, !0);
                    }),
                    _.Animate(r, 0, 500),
                    setTimeout(function () {
                      i()(".em_slider_track").html(m.getLang().strackInfo);
                    }, 500)),
                    c.Set("status", "ready", e.id),
                    d.Exec("statusChange", e.id));
                }, 500))
              : "abuse" == n.message
                ? (v.ShowResult("abuse", e),
                  setTimeout(function () {
                    (c.Set("status", "auto", e.id), T(e));
                  }, 2e3))
                : "upgrade" == n.message
                  ? (c.Set("status", "auto", e.id), T(e))
                  : "stop" == n.message
                    ? (c.Set("status", "lock", e.id),
                      d.Exec("error", e.id),
                      v.ShowResult("stop", e))
                    : d.Exec("error", e.id);
        },
        Abuse: function (n) {
          (c.Set("status", "abuse", n.id),
            (n.$(".em_init").className = "em_init abuse"),
            (n.$(".em_init_guide_tip").innerText = m.getLang().init),
            _.Hide(n.$(".em_slider")),
            _.Hide(n.$(".em_word")),
            "bind" == n.config.product
              ? setTimeout(function () {
                  I(n);
                }, 2e3)
              : (_.Hide(n.$(".em_widget")),
                "popup" == n.config.product && _.Hide(n.$(".em_mask"), 200)));
        },
        SetSlidePosition: function (n, e, t) {
          var r = e.$(".em_slider_knob"),
            i = e.$(".em_slice");
          ((n = t ? 0 : n < 2 ? 2 : n > 198 ? 198 : n),
            (r.style.left = n + "px"),
            (i.style.left = e.config.xpos + n + "px"));
        },
        InputValid: function (n) {
          return function () {
            "ready" == c.Get("status", n.id) &&
              (c.Set("startTime", new Date(), n.id),
              c.Set("moveTime", 0, n.id),
              c.Set("status", "process", n.id),
              y.RecordStart([0, 0, 0], n.id));
          };
        },
        InputSubmit: function (n) {
          return function (e) {
            13 == e.keyCode &&
              (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
              "" != i()(n.$(".em_input")).val() &&
                i()(n.$(".em_valid_btn")).trigger("click"));
          };
        },
        GuideClick: function (n) {
          return function () {
            if (!G.HasClass(n.$(".em_init"), "loading")) {
              var e = c.Get("status", n.id);
              if (
                ("success" != e &&
                  "lock" != e &&
                  ((n.$(".em_init").className = "em_init loading"),
                  (n.$(".em_init_guide_tip").innerText = "姝ｅ湪楠岃瘉涓�...")),
                "init" == e)
              ) {
                (c.Set("status", "lock", n.id),
                  c.Set("endTime", new Date(), n.id));
                var t = y.GetRecord(n.id),
                  r = {
                    appid: n.config.appid,
                    ctxid: n.config.captchaContextId,
                    type: n.config.type,
                    userresponse: "",
                    data: t,
                  };
                C(r, E.ValidCallBack, n);
              } else e && "abuse" == e ? I(n) : e && "ready" == e && T(n);
            }
          };
        },
        GuideIn: function (n) {
          return function (e) {
            if (!c.Get("startTime", n.id)) {
              (c.Set("startTime", new Date(), n.id),
                c.Set("moveTime", 0, n.id));
              var t =
                  e.clientX ||
                  (e.changedTouches && e.changedTouches[0].clientX),
                r =
                  e.clientY ||
                  (e.changedTouches && e.changedTouches[0].clientY),
                i = n.$(".em_init").getBoundingClientRect();
              y.RecordStart(
                [Math.round(t - i.left), Math.round(i.top + i.height - r), 0],
                n.id,
              );
            }
          };
        },
      };
    ((E.ClickChoose = function (n) {
      return function (e) {
        if (0 === n.config.count && "ready" == c.Get("status", n.id)) {
          (c.Set("startTime", new Date(), n.id),
            c.Set("status", "process", n.id),
            c.Set("moveTime", 0, n.id));
          var t =
              e.clientX || (e.changedTouches && e.changedTouches[0].clientX),
            r = e.clientY || (e.changedTouches && e.changedTouches[0].clientY),
            i = n.$(".em_widget").getBoundingClientRect();
          y.RecordStart(
            [Math.round(t - i.left), Math.round(i.top + i.height - r), 0],
            n.id,
          );
        }
        var o,
          a,
          s = n.config.point_statck.slice(-1)[0];
        if (s && e.target === s.el)
          (n.$(".em_fullbg").removeChild(n.config.point_statck.pop().el),
            n.config.count--);
        else if (n.config.count < 5) {
          var l = this.getBoundingClientRect();
          (n.config.count++,
            (o = { left: e.clientX - l.left, top: e.clientY - l.top }),
            ((a = document.createElement("div")).className =
              "em_icon_point point_" + n.config.count),
            (a.style.left = o.left - 10 + "px"),
            (a.style.top = (o.top - 30 > 0 ? o.top - 30 : 0) + "px"),
            n.$(".em_fullbg").appendChild(a),
            n.config.point_statck.push({
              el: a,
              coord: [
                Math.round(o.left),
                Math.round(o.top),
                new Date().getTime() - c.Get("startTime", n.id),
              ],
            }));
        }
      };
    }),
      (E.MouseClick = function (n) {
        return function (e) {
          if (
            "ready" == c.Get("status", n.id) &&
            "slide" == n.config.type &&
            2 != e.button
          ) {
            (c.Set("startTime", new Date(), n.id),
              c.Set("status", "moving", n.id),
              d.Exec("statusChange", n.id),
              e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
            var t = n.$(".em_slider_knob");
            (i()(n.$(".em_slice")).addClass("em_moving"),
              i()(t).addClass("em_moving"));
            var r =
                (e = e.originalEvent).clientX ||
                (e.changedTouches && e.changedTouches[0].clientX),
              o =
                e.clientY || (e.changedTouches && e.changedTouches[0].clientY);
            (c.Set("startX", r, n.id),
              c.Set("startY", o, n.id),
              y.RecordStart([0, 0, 0], n.id),
              c.Set("moveTime", 0, n.id),
              _.Hide(n.$(".em_fullbg")));
          }
        };
      }),
      (E.MouseMove = function (n) {
        return function (e) {
          var t = c.Get("status", n.id);
          if ("moving" == t && "slide" == n.config.type) {
            (p.Bind(n.$(".em_widget"), "leave", E.MouseUp(n)),
              e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
            var r = c.Get("startX", n.id),
              o = c.Get("startY", n.id),
              a =
                (((e = e.originalEvent).changedTouches &&
                  e.changedTouches[0].clientX) ||
                  e.clientX) - r,
              s =
                o -
                ((e.changedTouches && e.changedTouches[0].clientY) ||
                  e.clientY);
            ((a = parseInt(a)),
              E.SetSlidePosition(a, n),
              (d = new Date().getTime() - c.Get("startTime", n.id)) -
                c.Get("moveTime", n.id) >=
                10 &&
                (c.Set("moveTime", d, n.id),
                y.RecordMouse([a, Math.round(s), d], n.id)),
              i()(".em_slider_track").html(""));
          } else if ("init" == t && "init" == n.config.type) {
            e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
            ((r =
              e.clientX || (e.changedTouches && e.changedTouches[0].clientX)),
              (o =
                e.clientY ||
                (e.changedTouches && e.changedTouches[0].clientY)));
            var l = n.$(".em_init").getBoundingClientRect();
            (d = new Date().getTime() - c.Get("startTime", n.id)) -
              c.Get("moveTime", n.id) >=
              10 &&
              (c.Set("moveTime", d, n.id),
              y.RecordMouse(
                [Math.round(r - l.left), Math.round(l.top + l.height - o), d],
                n.id,
              ));
          } else if (
            "process" == t &&
            ("word" == n.config.type || "click" == n.config.type)
          ) {
            ((r =
              e.clientX || (e.changedTouches && e.changedTouches[0].clientX)),
              (o =
                e.clientY ||
                (e.changedTouches && e.changedTouches[0].clientY)));
            var d,
              u = n.$(".em_widget").getBoundingClientRect();
            (d = new Date().getTime() - c.Get("startTime", n.id)) -
              c.Get("moveTime", n.id) >=
              15 &&
              (c.Set("moveTime", d, n.id),
              y.RecordMouse(
                [Math.round(r - u.left), Math.round(u.top + u.height - o), d],
                n.id,
              ));
          }
        };
      }),
      (E.MouseUp = function (n) {
        return function (e) {
          var t = c.Get("status", n.id);
          if ("moving" == t && "slide" == n.config.type) {
            ((t = c.Set("status", "lock", n.id)),
              i()(n.$(".em_slice")).removeClass("em_moving"),
              i()(n.$(".em_slider_knob")).removeClass("em_moving"));
            var r = c.Get("startX", n.id),
              o = c.Get("startY", n.id),
              a =
                (((e = e.originalEvent).changedTouches &&
                  e.changedTouches[0].clientX) ||
                  e.clientX) - r,
              s =
                o -
                ((e.changedTouches && e.changedTouches[0].clientY) ||
                  e.clientY),
              l = new Date();
            (c.Set("endTime", l, n.id),
              y.RecordMouse(
                [
                  Math.round(a),
                  Math.round(s),
                  l.getTime() - c.Get("startTime", n.id),
                ],
                n.id,
              ),
              (a = parseInt(a)));
            var d = y.GetRecord(n.id),
              u = {
                appid: n.config.appid,
                ctxid: n.config.captchaContextId,
                type: n.config.type,
                userresponse: a,
                data: d,
              };
            C(u, E.ValidCallBack, n);
          }
        };
      }),
      (E.SubmitValid = function (n) {
        return function (e) {
          n.config.type;
          if ("process" == c.Get("status", n.id) && c.Get("startTime", n.id))
            if ("word" === n.config.type) {
              (c.Set("endTime", new Date(), n.id),
                c.Set("status", "lock", n.id));
              var t = i()(n.$(".em_input")).val(),
                r = y.GetRecord(n.id),
                o = {
                  appid: n.config.appid,
                  ctxid: n.config.captchaContextId,
                  type: n.config.type,
                  userresponse: t,
                  data: r,
                };
              C(o, E.ValidCallBack, n);
            } else {
              (c.Set("endTime", new Date(), n.id),
                c.Set("status", "lock", n.id));
              var a = i.a.map(n.config.point_statck, function (n) {
                return n.coord.join(",");
              });
              ((r = y.GetRecord(n.id)),
                (o = {
                  appid: n.config.appid,
                  ctxid: n.config.captchaContextId,
                  type: n.config.type,
                  userresponse: a.join(":"),
                  data: r,
                }));
              C(o, E.ValidCallBack, n);
            }
        };
      }),
      (E.BindEvent = function (n) {
        (p.Bind(n.$(".em_slider_knob"), "down", E.MouseClick(n)),
          p.Bind(n.$(".em_init"), "click", E.GuideClick(n)),
          p.Bind(n.$(".em_init"), "move", E.MouseMove(n)),
          p.Bind(n.$(".em_widget"), "move", E.MouseMove(n)),
          p.Bind(n.$(".em_widget"), "up", E.MouseUp(n)),
          "word" === n.config.type &&
            (p.Bind(n.$(".em_input"), "change", E.InputValid(n)),
            p.Bind(n.$(".em_input"), "keypress", E.InputSubmit(n))),
          "click" === n.config.type &&
            p.Bind(n.$(".em_box"), "click", E.ClickChoose(n)),
          "init" == n.config.type &&
            p.Bind(n.$(".em_init"), "enter", E.GuideIn(n)),
          p.Bind(n.$(".em_valid_btn"), "click", E.SubmitValid(n)),
          p.Bind(n.$(".em_refresh_button"), "click", function (e) {
            (p.unBind(n.$(".em_refresh_button"), "click"),
              e.stopPropagation(),
              T(n));
          }),
          p.Bind(n.$(".em_close_button"), "click", function (e) {
            (e.stopPropagation(), G.WidgetHide(n));
          }));
      }));
    var M = E,
      A = {
        RenderDom: function n(e, t, r) {
          if (
            (t || (t = document.createElement("div")),
            "string" == typeof e && "" != e)
          ) {
            var i = document.createElement("span");
            return ((i.innerHTML = e), void t.appendChild(i));
          }
          if ("" == e) return null;
          for (var o in e) {
            var a = "" == o.split(".")[0] ? "div" : o.split(".")[0],
              s = o.split(".")[1],
              c = document.createElement(a);
            ((c.className = s),
              "hidden" == a
                ? (c.name = s)
                : "input" == a && ((c.name = s), (c.style.display = "none")),
              t.appendChild(c),
              r(c, "." + s.split(" ")[0]),
              n(e[o], c, r));
          }
          return t.childNodes ? t : null;
        },
        GetClassTree: function (n, e) {
          var t = m.getLang(),
            r = {
              ".em_widget": {
                ".em_top": { ".em_top_tip": t.top_tip[e], ".em_pic_tip": {} },
                ".em_box": {
                  "a.em_bg": { ".em_cut_bg": {}, ".em_slice": {} },
                  "a.em_fullbg": { ".em_cut_fullbg": {} },
                  ".em_info": { ".em_info_tip": {} },
                },
                ".em_slider": {
                  ".em_slider_track": t.strackInfo,
                  ".em_slider_knob": {},
                },
                ".em_word": { "input.em_input": {} },
                ".em_toolbar": {
                  "a.em_close_button": {},
                  "a.em_refresh_button": {},
                  "a.em_valid_btn": t.validBtn,
                },
              },
              ".em_point": {},
              ".em_data": { "hidden.validate": {}, "hidden.context": {} },
              ".em_init": { ".em_init_icon": { ".em_init_guide_tip": {} } },
            };
          return (("popup" != n && "bind" != n) || (r[".em_mask"] = {}), r);
        },
        Generate: function (n, e) {
          var t = $(e)[0];
          (A.Add$(n),
            (n.dom = A.RenderDom(
              A.GetClassTree(n.config.product, n.config.type),
              null,
              n.$,
            )),
            A.InitStyle(n),
            A.PicBind(n, !0),
            M.BindEvent(n),
            (n.dom.style["touch-action"] = "none"),
            (n.dom.style["ms-touch-action"] = "none"),
            (n.dom.id = "em_" + n.id),
            (n.dom.className = "em_holder em_" + n.config.product),
            "float" == n.config.product && A.FloatInit(n),
            ("popup" != n.config.product && "bind" != n.config.product) ||
              A.PopupInit(n),
            t.appendChild(n.dom),
            (n.$(".context").value = n.config.captchaContextId));
        },
        InitStyle: function (n) {
          ("slide" == n.config.type &&
            (M.SetSlidePosition(0, n, !0), _.Show(n.$(".em_slider_knob"), 200)),
            (n.$(".em_box").style.height = n.config.height + "px"));
          var e = n.$(".em_slider"),
            t = n.$(".em_word"),
            r = n.$(".em_input"),
            i = n.$(".em_valid_btn"),
            o = n.$(".em_init"),
            a = n.$(".em_widget");
          ("word" === n.config.type
            ? (_.Hide(e),
              _.Hide(o),
              _.Show(t),
              _.Show(i),
              (r.style.display = ""),
              r.removeAttribute("disabled"),
              (r.value = ""))
            : "slide" === n.config.type
              ? (_.Hide(o), _.Hide(t), _.Hide(i))
              : "click" === n.config.type
                ? (_.Hide(e), _.Hide(o), _.Hide(t), _.Show(i))
                : "init" === n.config.type &&
                  ((n.$(".em_init_guide_tip").innerText = "鐐瑰嚮寮€濮嬮獙璇�"),
                  _.Hide(e),
                  _.Hide(t),
                  _.Hide(a)),
            A.ToolTip(n, n.$(".em_close_button"), "鍏抽棴"),
            A.ToolTip(n, n.$(".em_refresh_button"), "鍒锋柊楠岃瘉鐮�"));
        },
        FloatInit: function (n) {
          (_.Show(n.$(".em_close_button")),
            "init" == n.config.type
              ? _.Hide(n.$(".em_widget"))
              : ((n.$(".em_init").className = "em_init loading"),
                (n.$(".em_init_guide_tip").innerText = "姝ｅ湪楠岃瘉涓�..."),
                "click" == n.config.type
                  ? (n.$(".em_widget").style.top =
                      0 - (parseInt(n.config.height) + 60) / 2 + "px")
                  : (n.$(".em_widget").style.top =
                      0 - (parseInt(n.config.height) + 110) / 2 + "px"),
                _.Show(n.$(".em_widget")),
                _.Show(n.$(".em_point"))));
        },
        PopupInit: function (n) {
          (_.Show(n.$(".em_close_button")),
            "init" == n.config.type
              ? (_.Hide(n.$(".em_mask")), _.Hide(n.$(".em_widget")))
              : ((n.$(".em_init").className = "em_init loading"),
                (n.$(".em_init_guide_tip").innerText = "姝ｅ湪楠岃瘉涓�..."),
                _.Show(n.$(".em_mask")),
                _.Show(n.$(".em_widget"))));
        },
        WidgetHide: function (n) {
          (_.Hide(n.$(".em_widget"), 200),
            _.Hide(n.$(".em_point")),
            ("popup" != n.config.product && "bind" != n.config.product) ||
              _.Hide(n.$(".em_mask"), 200));
          var e = c.Get("status", n.id);
          "success" != e &&
            "abuse" != e &&
            ("lock" != e && c.Set("status", "ready", n.id),
            (n.$(".em_init").className = "em_init"),
            (n.$(".em_init_guide_tip").innerText = "鐐瑰嚮杩涜楠岃瘉"));
        },
      };
    ((A.CreateImage = function (n, e, t) {
      var r = new Date(),
        i = a.Utility.getLength(e),
        o = {},
        s = !1,
        l = 0;
      a.Utility.map(e, function (e, a) {
        m.getResource(n, a, function (a, d) {
          ((l += 1),
            (s = s || a),
            a || (o[e] = d),
            (function () {
              if (l >= i)
                if (s)
                  ((n.config.retry += 1),
                    c.Set("status", "auto", n.id),
                    n.refresh());
                else {
                  n.config.retry = 0;
                  var e = new Date().getTime() - r.getTime();
                  t(o, e);
                }
            })());
        });
      });
    }),
      (A.PicBind = function (n, e) {
        var t = n.config.type;
        if ("slide" == t)
          A.CreateImage(
            n,
            { fullbg: n.config.fullbg, bg: n.config.bg, slice: n.config.slice },
            function (t, r) {
              (S.DecodeImg(t.fullbg.src, t.bg.src, n, e),
                c.Set("imgload", r, n.id));
              var i = n.$(".em_slice");
              ((i.style.backgroundImage = "url(" + t.slice.src + ")"),
                (i.style.width = (t.slice.width || 60) + "px"),
                (i.style.height = (t.slice.height || 60) + "px"),
                (i.style.left = n.config.xpos + "px"),
                (i.style.top = n.config.ypos + "px"),
                setTimeout(function () {
                  c.Set("status", "ready", n.id);
                }, 200));
            },
          );
        else if ("word" == t) {
          var r = 200;
          (e && (r = 0),
            A.CreateImage(n, { fullbg: n.config.fullbg }, function (t, i) {
              (c.Set("imgload", i, n.id),
                S.DecodeImg(t.fullbg.src, null, n, e),
                setTimeout(function () {
                  c.Set("status", "ready", n.id);
                }, r));
            }));
        } else if ("click" == t) {
          r = 200;
          (e && (r = 0),
            A.CreateImage(
              n,
              { fullbg: n.config.fullbg, slice: n.config.slice },
              function (t, i) {
                ((n.$(".em_pic_tip").style.backgroundImage =
                  "url(" + t.slice.src + ")"),
                  c.Set("imgload", i, n.id),
                  S.DecodeImg(t.fullbg.src, null, n, e),
                  setTimeout(function () {
                    ((n.config.count = 0),
                      (n.config.point_statck = []),
                      c.Set("status", "ready", n.id));
                  }, r));
              },
            ));
        } else if ("init" == t) {
          r = 200;
          (e && (r = 0),
            setTimeout(function () {
              c.Set("status", "init", n.id);
            }, r));
        }
      }),
      (A.Add$ = function (n) {
        var e = {};
        n.$ = function (n, t) {
          if (!t) return ((t = n), e[n]);
          e[t] = n;
        };
      }),
      (A.HasClass = function (n, e) {
        var t = n.className.split(" ");
        return -1 != a.inArray(e, t);
      }),
      (A.InPosition = function (n, e) {
        if (!n || null == n || void 0 === n) return !1;
        if (e.compareDocumentPosition) {
          var t = e.compareDocumentPosition(n);
          return !(20 !== t && 0 !== t);
        }
        if (e.contains) return e.contains(n);
        for (; n != e && n; ) n = n.parentNode;
        return !!n;
      }),
      (A.ToolTip = function (n, e, t) {
        !(!("ontouchstart" in window) && !navigator.msMaxTouchPoints) ||
          (p.Bind(e, "enter", function () {
            var r = n.$(".em_widget").getBoundingClientRect(),
              i = e.getBoundingClientRect(),
              o = $(
                "<div class='em_tooltip'><div class='em_tooltip_arrow'></div><div class='em_tooltip_inner'>" +
                  t +
                  "</div></div>",
              );
            (o.css("left", i.left - r.left - (12 * t.length + 16) / 2),
              $(e).after(o),
              o.show());
          }),
          p.Bind(e, "leave", function () {
            $(e).next().remove();
          }));
      }));
    var G = A;
    function B(n, e) {
      if (!n.captchaContextId || !n.containerId)
        throw new Error(m.errors.initError);
      var t, r, o;
      e
        ? ((t = c.Get("onRefresh", e.id)),
          (r = c.Get("onError", e.id)),
          (o = c.Get("onSuccess", e.id)),
          c.Delete(e.id),
          d.Delete(e.id))
        : i()("#" + n.containerId).empty();
      var s = e || this;
      return (
        (s.id = a.random()),
        d.Init(s.id),
        c.Init(s.id, s),
        c.Set("status", "new", s.id),
        d.Bind("error", R, s.id),
        (s.config = i.a.extend({}, m.defaultConfig, n)),
        t && "function" == typeof t && (s = s.onRefresh(t)),
        r && "function" == typeof r && (s = s.onError(r)),
        o && "function" == typeof o && (s = s.onSuccess(o)),
        s
      );
    }
    ((B.prototype.refresh = function (n, e) {
      T(this, n, e);
    }),
      (B.prototype.appendTo = function (n) {
        return (G.Generate(this, n), this);
      }),
      (B.prototype.destroy = function () {
        (this.dom &&
          this.dom.parentNode &&
          this.dom.parentNode.removeChild(this.dom),
          d.Delete(this.id),
          c.Set("status", "lock", this.id));
      }),
      (B.prototype.getValidate = function () {
        return this.config.status < 0
          ? {
              contextId: this.$ ? this.$(".context").value : "",
              validate: a.Guid(),
            }
          : {
              contextId: this.$ ? this.$(".context").value : "",
              validate: this.$ ? this.$(".validate").value : "",
            };
      }),
      (B.prototype.verify = function (n, e) {
        var t = this,
          r = c.Get("status", t.id);
        if ("new" == r)
          T(t, n, e, function () {
            (c.Set("status", "lock", t.id),
              c.Set("startTime", new Date(), t.id),
              c.Set("endTime", new Date(), t.id));
            var n = {
              appid: t.config.appid,
              ctxid: t.config.captchaContextId,
              type: t.config.type,
              userresponse: "",
              data: "",
            };
            C(n, M.ValidCallBack, t);
          });
        else if ("init" == r) {
          (c.Set("status", "lock", t.id),
            c.Set("startTime", new Date(), t.id),
            c.Set("endTime", new Date(), t.id));
          var i = {
            appid: t.config.appid,
            ctxid: t.config.captchaContextId,
            type: t.config.type,
            userresponse: "",
            data: "",
          };
          C(i, M.ValidCallBack, t);
        } else "ready" == r && T(t, n, e);
      }),
      (B.prototype.onError = function (n) {
        if ("function" == typeof n) return (c.Set("onError", n, this.id), this);
        throw new Error(m.errors.callbackError);
      }),
      (B.prototype.onRefresh = function (n) {
        if ("function" == typeof n)
          return (c.Set("onRefresh", n, this.id), this);
        throw new Error(m.errors.callbackError);
      }),
      (B.prototype.onSuccess = function (n) {
        if ("function" == typeof n)
          return (c.Set("onSuccess", n, this.id), this);
        throw new Error(m.errors.callbackError);
      }));
    t(1);
    window.EMCaptcha = function (n) {
      return new B(n);
    };
  },
]);
