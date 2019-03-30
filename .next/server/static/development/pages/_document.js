module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/document */ "next/document");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_jsx_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/server */ "styled-jsx/server");
/* harmony import */ var styled_jsx_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_server__WEBPACK_IMPORTED_MODULE_4__);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var MyDocument =
/*#__PURE__*/
function (_Document) {
  _inherits(MyDocument, _Document);

  function MyDocument() {
    _classCallCheck(this, MyDocument);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyDocument).apply(this, arguments));
  }

  _createClass(MyDocument, [{
    key: "render",
    value: function render() {
      var pageContext = this.props.pageContext;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("html", {
        lang: "en",
        dir: "rtl"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_3__["Head"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3403757441",
        css: "body{background-color:#fff !important;font:11px menlo;color:black;}a{-webkit-text-decoration:none;text-decoration:none;}a:hover{cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}button:hover{cursor:pointer;}.border{border:solid green;}.floatLeft{float:left;}.inlineBlock{display:inline-block !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxzc3Itc2ltcGxlLXN0b3JlLXJ0bFxccGFnZXNcXF9kb2N1bWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZMkIsQUFHMEMsQUFLWixBQUdQLEFBSUEsQUFHTSxBQUl0QixBQUdELFdBSEUsSUFWc0IsQUFJdEIsSUFHQSxhQU1ELENBckJrQixnQkFDSixDQUliLFdBSEQsSUFPQyIsImZpbGUiOiJDOlxcc3NyLXNpbXBsZS1zdG9yZS1ydGxcXHBhZ2VzXFxfZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgRG9jdW1lbnQsIHsgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnO1xyXG5pbXBvcnQgZmx1c2ggZnJvbSAnc3R5bGVkLWpzeC9zZXJ2ZXInO1xyXG5cclxuY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHBhZ2VDb250ZXh0IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxodG1sIGxhbmc9XCJlblwiIGRpcj1cInJ0bFwiPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgIGJvZHkgeyBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udDogMTFweCBtZW5sbztcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIH1cclxuICAgICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgfVxyXG4gICAgICBhOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICB9XHJcbiAgICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgfVxyXG4gICAgICAgLmJvcmRlcntcclxuICAgICAgICAgYm9yZGVyOiBzb2xpZCBncmVlbjsgIFxyXG4gICAgICAgfVxyXG4gICAgICAgLmZsb2F0TGVmdHtcclxuICAgICAgICAgZmxvYXQ6IGxlZnRcclxuICAgICAgIH1cclxuICAgICAgIC5pbmxpbmVCbG9ja3tcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudFxyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgICAgey8qIFVzZSBtaW5pbXVtLXNjYWxlPTEgdG8gZW5hYmxlIEdQVSByYXN0ZXJpemF0aW9uICovfVxyXG4gICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgICAgY29udGVudD1cIm1pbmltdW0tc2NhbGU9MSwgaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGgsIHNocmluay10by1maXQ9bm9cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsvKiBQV0EgcHJpbWFyeSBjb2xvciAqL31cclxuICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgIG5hbWU9XCJ0aGVtZS1jb2xvclwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9e3BhZ2VDb250ZXh0ID8gcGFnZUNvbnRleHQudGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4gOiBudWxsfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8Ym9keT5cclxuICAgICAgICAgIDxNYWluIC8+XHJcbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxyXG4gICAgICAgIDwvYm9keT5cclxuICAgICAgPC9odG1sPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbk15RG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzID0gY3R4ID0+IHtcclxuICAvLyBSZXNvbHV0aW9uIG9yZGVyXHJcbiAgLy9cclxuICAvLyBPbiB0aGUgc2VydmVyOlxyXG4gIC8vIDEuIGFwcC5nZXRJbml0aWFsUHJvcHNcclxuICAvLyAyLiBwYWdlLmdldEluaXRpYWxQcm9wc1xyXG4gIC8vIDMuIGRvY3VtZW50LmdldEluaXRpYWxQcm9wc1xyXG4gIC8vIDQuIGFwcC5yZW5kZXJcclxuICAvLyA1LiBwYWdlLnJlbmRlclxyXG4gIC8vIDYuIGRvY3VtZW50LnJlbmRlclxyXG4gIC8vXHJcbiAgLy8gT24gdGhlIHNlcnZlciB3aXRoIGVycm9yOlxyXG4gIC8vIDEuIGRvY3VtZW50LmdldEluaXRpYWxQcm9wc1xyXG4gIC8vIDIuIGFwcC5yZW5kZXJcclxuICAvLyAzLiBwYWdlLnJlbmRlclxyXG4gIC8vIDQuIGRvY3VtZW50LnJlbmRlclxyXG4gIC8vXHJcbiAgLy8gT24gdGhlIGNsaWVudFxyXG4gIC8vIDEuIGFwcC5nZXRJbml0aWFsUHJvcHNcclxuICAvLyAyLiBwYWdlLmdldEluaXRpYWxQcm9wc1xyXG4gIC8vIDMuIGFwcC5yZW5kZXJcclxuICAvLyA0LiBwYWdlLnJlbmRlclxyXG5cclxuICAvLyBSZW5kZXIgYXBwIGFuZCBwYWdlIGFuZCBnZXQgdGhlIGNvbnRleHQgb2YgdGhlIHBhZ2Ugd2l0aCBjb2xsZWN0ZWQgc2lkZSBlZmZlY3RzLlxyXG4gIGxldCBwYWdlQ29udGV4dDtcclxuICBjb25zdCBwYWdlID0gY3R4LnJlbmRlclBhZ2UoQ29tcG9uZW50ID0+IHtcclxuICAgIGNvbnN0IFdyYXBwZWRDb21wb25lbnQgPSBwcm9wcyA9PiB7XHJcbiAgICAgIHBhZ2VDb250ZXh0ID0gcHJvcHMucGFnZUNvbnRleHQ7XHJcbiAgICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz47XHJcbiAgICB9O1xyXG5cclxuICAgIFdyYXBwZWRDb21wb25lbnQucHJvcFR5cGVzID0ge1xyXG4gICAgICBwYWdlQ29udGV4dDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gV3JhcHBlZENvbXBvbmVudDtcclxuICB9KTtcclxuXHJcbiAgbGV0IGNzcztcclxuICAvLyBJdCBtaWdodCBiZSB1bmRlZmluZWQsIGUuZy4gYWZ0ZXIgYW4gZXJyb3IuXHJcbiAgaWYgKHBhZ2VDb250ZXh0KSB7XHJcbiAgICBjc3MgPSBwYWdlQ29udGV4dC5zaGVldHNSZWdpc3RyeS50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnBhZ2UsXHJcbiAgICBwYWdlQ29udGV4dCxcclxuICAgIC8vIFN0eWxlcyBmcmFnbWVudCBpcyByZW5kZXJlZCBhZnRlciB0aGUgYXBwIGFuZCBwYWdlIHJlbmRlcmluZyBmaW5pc2guXHJcbiAgICBzdHlsZXM6IChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxzdHlsZVxyXG4gICAgICAgICAgaWQ9XCJqc3Mtc2VydmVyLXNpZGVcIlxyXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxyXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjc3MgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtmbHVzaCgpIHx8IG51bGx9XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeURvY3VtZW50OyJdfQ== */\n/*@ sourceURL=C:\\ssr-simple-store-rtl\\pages\\_document.js */"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        charSet: "utf-8",
        className: "jsx-3403757441"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no",
        className: "jsx-3403757441"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "theme-color",
        content: pageContext ? pageContext.theme.palette.primary.main : null,
        className: "jsx-3403757441"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
        className: "jsx-3403757441"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("body", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_3__["Main"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_3__["NextScript"], null)));
    }
  }]);

  return MyDocument;
}(next_document__WEBPACK_IMPORTED_MODULE_3___default.a);

MyDocument.getInitialProps = function (ctx) {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render
  // Render app and page and get the context of the page with collected side effects.
  var pageContext;
  var page = ctx.renderPage(function (Component) {
    var WrappedComponent = function WrappedComponent(props) {
      pageContext = props.pageContext;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, props);
    };

    WrappedComponent.propTypes = {
      pageContext: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
    };
    return WrappedComponent;
  });
  var css; // It might be undefined, e.g. after an error.

  if (pageContext) {
    css = pageContext.sheetsRegistry.toString();
  }

  return _objectSpread({}, page, {
    pageContext: pageContext,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", {
      id: "jss-server-side" // eslint-disable-next-line react/no-danger
      ,
      dangerouslySetInnerHTML: {
        __html: css
      }
    }), styled_jsx_server__WEBPACK_IMPORTED_MODULE_4___default()() || null)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ 1:
/*!**********************************!*\
  !*** multi ./pages/_document.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_document.js */"./pages/_document.js");


/***/ }),

/***/ "next/document":
/*!********************************!*\
  !*** external "next/document" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=_document.js.map