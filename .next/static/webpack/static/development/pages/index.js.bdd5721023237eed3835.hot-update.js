webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actions */ "./actions/actions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchBar */ "./components/SearchBar.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _LogIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LogIn */ "./components/LogIn.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../header.css */ "./header.css");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_header_css__WEBPACK_IMPORTED_MODULE_8__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this));
    _this.state = {
      clickFistChart: "none",
      click: "none"
    };
    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;
      console.log("size", this.props.data.length);
      dispatch(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_2__["fetchCategoriesIfneeded"])());
      console.log('this.props.auth', this.props.auth); // if(this.props.auth === undefined){

      if (localStorage.myData === undefined) {
        console.log('yesss');
        dispatch(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_2__["fetchAuthDataForGuest"])());
      }

      console.log('this.props.auth2', this.props.auth);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        charSet: "UTF-8"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, 'Next.js Starter Project'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _header_css__WEBPACK_IMPORTED_MODULE_8___default.a
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "https://cdn.polyfill.io/v2/polyfill.min.js"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/cart"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "go to cart page")), "slug: ", this.props.slug, "price: ", this.props.price, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return console.log('this.props.basket', _this2.props.products);
        }
      }, "this.props.basket"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LogIn__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchBar__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return console.log('this.props.auth late', _this2.props.auth);
        }
      }, "auth"), this.props.auth, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        id: "navigation"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "small-navbar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "spinner-master"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        onchange: "handleChange(this);",
        id: "spinner-form3"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        class: "spinner-spin3",
        for: "spinner-form3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "spinner3 diagonal part-1"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "spinner3 horizontal"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "spinner3 diagonal part-2"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "side-nav",
        class: "side-nav"
      }, this.props.data.map(function (category) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          as: "/category/".concat(category.address),
          href: "/category?address=".concat(category.address)
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, category.title));
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "dots-master"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        id: "dots-form"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        class: "dots3",
        for: "dots-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "dots diagonal part-1"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "dots horizontal"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "dots diagonal part-2"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "clearfix"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "nav-bar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, this.props.data.map(function (category) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          as: "/category/".concat(category.address),
          href: "/category?address=".concat(category.address)
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, category.title)));
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _header_css__WEBPACK_IMPORTED_MODULE_8___default.a
        }
      }));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    // data: state.categoriesReducer.data
    data: state.categoriesReducer.data,
    auth: state.authReducer.token,
    slug: state.addToCreditReducer.slug,
    price: state.addToCreditReducer.total_price,
    products: state.addToCreditReducer.products
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Header));

/***/ })

})
//# sourceMappingURL=index.js.bdd5721023237eed3835.hot-update.js.map