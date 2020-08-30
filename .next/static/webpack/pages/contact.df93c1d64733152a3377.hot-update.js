webpackHotUpdate_N_E("pages/contact",{

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
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/static/assets/images/logo5.png",
    alt: "Redcoral Logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }
  }))), __jsx("ul", {
    className: "nav",
    style: mobileMenu === true ? hidemenu : showMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 23
    }
  }, "Home"))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 23
    }
  }, "Blogs"))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 23
    }
  }, "Services"))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 23
    }
  }, "About Us"))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 23
    }
  }, "Contact Us")))), __jsx("a", {
    className: "menu-trigger",
    onClick: menuTrigger,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 19
    }
  }, "Menu"))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiUm91dGVyIiwib25Sb3V0ZUNoYW5nZVN0YXJ0IiwidXJsIiwiTlByb2dyZXNzIiwic3RhcnQiLCJvblJvdXRlQ2hhbmdlQ29tcGxldGUiLCJkb25lIiwib25Sb3V0ZUNoYW5nZUVycm9yIiwiSGVhZGVyIiwibGlzdGVuZXIiLCJ1c2VTdGF0ZSIsInNjcm9sbFN0YXRlIiwic2V0U2Nyb2xsU3RhdGUiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2Nyb2xsZWQiLCJzY3JvbGxpbmdFbGVtZW50Iiwic2Nyb2xsVG9wIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1vYmlsZU1lbnUiLCJzZXRNb2JpbGVNZW51IiwibWVudVRyaWdnZXIiLCJzaG93TWVudSIsImRpc3BsYXkiLCJoaWRlbWVudSIsImJhY2tncm91bmQiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FBLGtEQUFNLENBQUNDLGtCQUFQLEdBQTRCLFVBQUNDLEdBQUQ7QUFBQSxTQUFTQyxnREFBUyxDQUFDQyxLQUFWLEVBQVQ7QUFBQSxDQUE1Qjs7QUFDQUosa0RBQU0sQ0FBQ0sscUJBQVAsR0FBK0IsVUFBQ0gsR0FBRDtBQUFBLFNBQVNDLGdEQUFTLENBQUNHLElBQVYsRUFBVDtBQUFBLENBQS9COztBQUNBTixrREFBTSxDQUFDTyxrQkFBUCxHQUE0QixVQUFDTCxHQUFEO0FBQUEsU0FBU0MsZ0RBQVMsQ0FBQ0csSUFBVixFQUFUO0FBQUEsQ0FBNUI7O0FBRUEsSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFJQyxRQUFRLEdBQUcsSUFBZjs7QUFEbUIsa0JBRW1CQyxzREFBUSxDQUFDLEtBQUQsQ0FGM0I7QUFBQSxNQUVaQyxXQUZZO0FBQUEsTUFFQ0Ms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MWQ2NDczMzE1MmEzMzc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKHVybCkgPT4gTlByb2dyZXNzLnN0YXJ0KCk7XHJcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAodXJsKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUVycm9yID0gKHVybCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBsZXQgbGlzdGVuZXIgPSBudWxsO1xyXG4gIGNvbnN0IFtzY3JvbGxTdGF0ZSwgc2V0U2Nyb2xsU3RhdGVdID0gdXNlU3RhdGUoXCJ0b3BcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsaXN0ZW5lciA9IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKGUpID0+IHtcclxuICAgICAgdmFyIHNjcm9sbGVkID0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAgIGlmIChzY3JvbGxlZCA+PSAxMDApIHtcclxuICAgICAgICBpZiAoc2Nyb2xsU3RhdGUgIT09IFwiYW1pclwiKSB7XHJcbiAgICAgICAgICBzZXRTY3JvbGxTdGF0ZShcImFtaXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChzY3JvbGxTdGF0ZSAhPT0gXCJ0b3BcIikge1xyXG4gICAgICAgICAgc2V0U2Nyb2xsU3RhdGUoXCJ0b3BcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbGlzdGVuZXIpO1xyXG4gICAgfTtcclxuICB9LCBbc2Nyb2xsU3RhdGVdKTtcclxuXHJcbiAgY29uc3QgW21vYmlsZU1lbnUsIHNldE1vYmlsZU1lbnVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IG1lbnVUcmlnZ2VyID0gKCkgPT4ge1xyXG4gICAgc2V0TW9iaWxlTWVudSghbW9iaWxlTWVudSk7XHJcbiAgfTtcclxuICBjb25zdCBzaG93TWVudSA9IHtcclxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICB9O1xyXG4gIGNvbnN0IGhpZGVtZW51ID0ge1xyXG4gICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgey8qIDxkaXYgaWQ9XCJwcmVsb2FkZXJcIj5cclxuICAgICAgICA8ZGl2IGlkPVwibG9hZGVyXCIgY2xhc3NOYW1lPVwic3Bpbm5lclwiPlxyXG4gICAgICAgICAgPGRpdiBpZD1cInNoYWRvd1wiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBpZD1cImJveFwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDxoZWFkZXJcclxuICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgc2Nyb2xsU3RhdGUgPT09IFwidG9wXCIgPyBcImhlYWRlci1hcmVhIFwiIDogXCJoZWFkZXItYXJlYSBoZWFkZXItc3RpY2t5XCJcclxuICAgICAgICB9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmQ6XHJcbiAgICAgICAgICAgIHNjcm9sbFN0YXRlID09PSBcInRvcFwiID8gXCJyZ2JhKDAsMCwwLDApXCIgOiBcInJnYmEoMjU1LDI1NSwyNTUsMSlcIixcclxuICAgICAgICAgIGNvbG9yOiBzY3JvbGxTdGF0ZSA9PT0gXCJ0b3BcIiA/IFwid2hpdGVcIiA6IFwiYmxhY2tcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtYWluLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgIGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvYXNzZXRzL2ltYWdlcy9sb2dvNS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlJlZGNvcmFsIExvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDx1bFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17bW9iaWxlTWVudSA9PT0gdHJ1ZSA/IGhpZGVtZW51IDogc2hvd01lbnV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+QmxvZ3M8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPlNlcnZpY2VzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPkFib3V0IFVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+Q29udGFjdCBVczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWVudS10cmlnZ2VyXCIgb25DbGljaz17bWVudVRyaWdnZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5NZW51PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==