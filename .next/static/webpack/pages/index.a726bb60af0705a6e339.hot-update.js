webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\asus\\Desktop\\red\\components\\Header.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





next_router__WEBPACK_IMPORTED_MODULE_2___default.a.onRouteChangeStart = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_2___default.a.onRouteChangeComplete = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_2___default.a.onRouteChangeError = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
};

var Header = function Header() {
  _s();

  var listener = null;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("top"),
      scrollState = _useState[0],
      setScrollState = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    listener = document.addEventListener("scroll", function (e) {
      var scrolled = document.scrollingElement.scrollTop;

      if (scrolled >= 100) {
        if (scrollState !== "amir") {
          setScrollState("amir");
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top");
        }
      }
    });
    return function () {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      mobileMenu = _useState2[0],
      setMobileMenu = _useState2[1];

  var menuTrigger = function menuTrigger() {
    setMobileMenu(!mobileMenu);
  };

  var showMenu = {
    display: "block"
  };
  var hidemenu = {
    display: "none"
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx("header", {
    className: scrollState === "top" ? "header-area " : "header-area header-sticky",
    style: {
      background: scrollState === "top" ? "rgba(0,0,0,0)" : "rgba(255,255,255,1)",
      color: scrollState === "top" ? "white" : "black"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("nav", {
    className: "main-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "orange-index.html",
    className: "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/static/assets/images/logo-orange.png",
    alt: "Turing",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }
  })), __jsx("ul", {
    className: "nav",
    style: mobileMenu === true ? hidemenu : showMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 23
    }
  }, "Home"))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 23
    }
  }, "About Us"))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 23
    }
  }, "Contact Us")))), __jsx("a", {
    className: "menu-trigger",
    onClick: menuTrigger,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 19
    }
  }, "Menu")), __jsx("ul", {
    className: "header-buttons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 19
    }
  }, __jsx("a", {
    className: "btn-nav-line",
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, "Login")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 19
    }
  }, __jsx("a", {
    className: "btn-nav-primary",
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, "Support")))))))));
};

_s(Header, "esr2p0eqNdCnJ2SyFy18hJrHX9Q=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiUm91dGVyIiwib25Sb3V0ZUNoYW5nZVN0YXJ0IiwidXJsIiwiTlByb2dyZXNzIiwic3RhcnQiLCJvblJvdXRlQ2hhbmdlQ29tcGxldGUiLCJkb25lIiwib25Sb3V0ZUNoYW5nZUVycm9yIiwiSGVhZGVyIiwibGlzdGVuZXIiLCJ1c2VTdGF0ZSIsInNjcm9sbFN0YXRlIiwic2V0U2Nyb2xsU3RhdGUiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2Nyb2xsZWQiLCJzY3JvbGxpbmdFbGVtZW50Iiwic2Nyb2xsVG9wIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1vYmlsZU1lbnUiLCJzZXRNb2JpbGVNZW51IiwibWVudVRyaWdnZXIiLCJzaG93TWVudSIsImRpc3BsYXkiLCJoaWRlbWVudSIsImJhY2tncm91bmQiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FBLGtEQUFNLENBQUNDLGtCQUFQLEdBQTRCLFVBQUNDLEdBQUQ7QUFBQSxTQUFTQyxnREFBUyxDQUFDQyxLQUFWLEVBQVQ7QUFBQSxDQUE1Qjs7QUFDQUosa0RBQU0sQ0FBQ0sscUJBQVAsR0FBK0IsVUFBQ0gsR0FBRDtBQUFBLFNBQVNDLGdEQUFTLENBQUNHLElBQVYsRUFBVDtBQUFBLENBQS9COztBQUNBTixrREFBTSxDQUFDTyxrQkFBUCxHQUE0QixVQUFDTCxHQUFEO0FBQUEsU0FBU0MsZ0RBQVMsQ0FBQ0csSUFBVixFQUFUO0FBQUEsQ0FBNUI7O0FBRUEsSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFJQyxRQUFRLEdBQUcsSUFBZjs7QUFEbUIsa0JBRW1CQyxzREFBUSxDQUFDLEtBQUQsQ0FGM0I7QUFBQSxNQUVaQyxXQUZZO0FBQUEsTUFFQ0Ms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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQURGLENBVEYsRUFjRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBREYsQ0FkRixDQVBGLEVBMkJFO0FBQUcsYUFBUyxFQUFDLGNBQWI7QUFBNEIsV0FBTyxFQUFFRCxXQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBM0JGLEVBOEJFO0FBQUksYUFBUyxFQUFDLGdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsY0FBYjtBQUE0QixRQUFJLEVBQUMsR0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLENBREYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsaUJBQWI7QUFBK0IsUUFBSSxFQUFDLEdBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQU5GLENBOUJGLENBREYsQ0FERixDQURGLENBVkYsQ0FQRixDQURGO0FBc0VELENBeEdEOztHQUFNZixNOztLQUFBQSxNO0FBMEdTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hNzI2YmI2MGFmMDcwNWE2ZTMzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICh1cmwpID0+IE5Qcm9ncmVzcy5zdGFydCgpO1xyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKHVybCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICh1cmwpID0+IE5Qcm9ncmVzcy5kb25lKCk7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgbGV0IGxpc3RlbmVyID0gbnVsbDtcclxuICBjb25zdCBbc2Nyb2xsU3RhdGUsIHNldFNjcm9sbFN0YXRlXSA9IHVzZVN0YXRlKFwidG9wXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGlzdGVuZXIgPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIChlKSA9PiB7XHJcbiAgICAgIHZhciBzY3JvbGxlZCA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgICBpZiAoc2Nyb2xsZWQgPj0gMTAwKSB7XHJcbiAgICAgICAgaWYgKHNjcm9sbFN0YXRlICE9PSBcImFtaXJcIikge1xyXG4gICAgICAgICAgc2V0U2Nyb2xsU3RhdGUoXCJhbWlyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoc2Nyb2xsU3RhdGUgIT09IFwidG9wXCIpIHtcclxuICAgICAgICAgIHNldFNjcm9sbFN0YXRlKFwidG9wXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGxpc3RlbmVyKTtcclxuICAgIH07XHJcbiAgfSwgW3Njcm9sbFN0YXRlXSk7XHJcblxyXG4gIGNvbnN0IFttb2JpbGVNZW51LCBzZXRNb2JpbGVNZW51XSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBtZW51VHJpZ2dlciA9ICgpID0+IHtcclxuICAgIHNldE1vYmlsZU1lbnUoIW1vYmlsZU1lbnUpO1xyXG4gIH07XHJcbiAgY29uc3Qgc2hvd01lbnUgPSB7XHJcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgfTtcclxuICBjb25zdCBoaWRlbWVudSA9IHtcclxuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIHsvKiA8ZGl2IGlkPVwicHJlbG9hZGVyXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cImxvYWRlclwiIGNsYXNzTmFtZT1cInNwaW5uZXJcIj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJzaGFkb3dcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJib3hcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8aGVhZGVyXHJcbiAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgIHNjcm9sbFN0YXRlID09PSBcInRvcFwiID8gXCJoZWFkZXItYXJlYSBcIiA6IFwiaGVhZGVyLWFyZWEgaGVhZGVyLXN0aWNreVwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOlxyXG4gICAgICAgICAgICBzY3JvbGxTdGF0ZSA9PT0gXCJ0b3BcIiA/IFwicmdiYSgwLDAsMCwwKVwiIDogXCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCIsXHJcbiAgICAgICAgICBjb2xvcjogc2Nyb2xsU3RhdGUgPT09IFwidG9wXCIgPyBcIndoaXRlXCIgOiBcImJsYWNrXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWFpbi1uYXZcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJvcmFuZ2UtaW5kZXguaHRtbFwiIGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvYXNzZXRzL2ltYWdlcy9sb2dvLW9yYW5nZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlR1cmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2XCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e21vYmlsZU1lbnUgPT09IHRydWUgPyBoaWRlbWVudSA6IHNob3dNZW51fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+QWJvdXQgVXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT5Db250YWN0IFVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtZW51LXRyaWdnZXJcIiBvbkNsaWNrPXttZW51VHJpZ2dlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPk1lbnU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaGVhZGVyLWJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0bi1uYXYtbGluZVwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0bi1uYXYtcHJpbWFyeVwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTdXBwb3J0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=