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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/actionTypes.js":
/*!********************************!*\
  !*** ./actions/actionTypes.js ***!
  \********************************/
/*! exports provided: CATEGORIES, AUTH_DATA, ADD_TO_CREDIT, GET_CART_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORIES", function() { return CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_DATA", function() { return AUTH_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CREDIT", function() { return ADD_TO_CREDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CART_DATA", function() { return GET_CART_DATA; });
var CATEGORIES = "CATEGORIES";
var AUTH_DATA = "AUTH_DATA";
var ADD_TO_CREDIT = "ADD_TO_CREDIT";
var GET_CART_DATA = "GET_CART_DATA";

/***/ }),

/***/ "./actions/actions.js":
/*!****************************!*\
  !*** ./actions/actions.js ***!
  \****************************/
/*! exports provided: LOGIN_REQUEST, getConfig, fetchCategoriesIfneeded, fetchlogInReqIfneeded, fetchAuthDataForGuest, fetchAddToCredit, fetchCartDataIfNeeded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_REQUEST", function() { return LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfig", function() { return getConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCategoriesIfneeded", function() { return fetchCategoriesIfneeded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchlogInReqIfneeded", function() { return fetchlogInReqIfneeded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAuthDataForGuest", function() { return fetchAuthDataForGuest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAddToCredit", function() { return fetchAddToCredit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartDataIfNeeded", function() { return fetchCartDataIfNeeded; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_createConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/createConfig */ "./api/createConfig.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/post */ "./pages/post.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actionTypes */ "./actions/actionTypes.js");
/* harmony import */ var _apiToReduxBridge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apiToReduxBridge */ "./actions/apiToReduxBridge.js");
/* harmony import */ var _components_CreateForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CreateForm */ "./components/CreateForm.js");
/* harmony import */ var _agent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../agent */ "./agent.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var LOGIN_REQUEST = 'LOGIN_REQUEST';





var getConfig = function getConfig() {
  var additionalSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object(_api_createConfig__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_apiToReduxBridge__WEBPACK_IMPORTED_MODULE_5__["getAccessToken"])(), additionalSettings);
};

var categories = function categories() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var response, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("http://api.projectant.aasoo.ir/shelves/categories/list/", getConfig());

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                data = _context.sent;
                console.log('data', data); //sddf
                // let obj = {product:"product_TapsdvOdT8", count:"1"}
                // let response2 =   axios.post(`http://api.projectant.aasoo.ir/orders/cart/add/`, createFormData(obj) , getConfig(obj))

                return _context.abrupt("return", dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["CATEGORIES"],
                  data: data
                }));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

var fetchCategoriesIfneeded = function fetchCategoriesIfneeded() {
  return function (dispatch) {
    return dispatch(categories());
  };
}; //LogIn dispatch

var logInReq = function logInReq(formData) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
        var response, settokenval;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('formDataformData', formData); // return axios.post(`${BASE_URL}/auth/login/`, formdata, getConfig(formdata))

                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("http://api.projectant.aasoo.ir/auth/login/", formData, getConfig(formData));

              case 3:
                response = _context2.sent;
                console.log('response auth token value', response);
                localStorage.setItem('myData', JSON.stringify(response.data.data));
                settokenval = Object(_agent__WEBPACK_IMPORTED_MODULE_7__["setToken"])(response.data.data);
                console.log('settokenval without value');
                console.log('settokenval', settokenval); // const data = await response.json();

                console.log('login data', response.data.data.token);
                return _context2.abrupt("return", dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["AUTH_DATA"],
                  data: response.data.data.token
                }));

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

var fetchlogInReqIfneeded = function fetchlogInReqIfneeded(formData) {
  return function (dispatch) {
    //   if (shouldFetchPosts(getState(), subreddit)) {
    return dispatch(logInReq(formData)); //   }
  };
}; // fetchAuthDataForGuest

var fetchAuthDataForGuest = function fetchAuthDataForGuest(body) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
        var response, settokenval, getTokenval;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("http://api.projectant.aasoo.ir/profiles/guest/", body, getConfig());

              case 2:
                response = _context3.sent;
                console.log('response', response);
                localStorage.setItem('myData', JSON.stringify(response.data.data));
                settokenval = Object(_agent__WEBPACK_IMPORTED_MODULE_7__["setToken"])(response.data.data.token);
                getTokenval = Object(_agent__WEBPACK_IMPORTED_MODULE_7__["getToken"])(response.data.data.token);
                console.log('getTokenval without value');
                console.log('settokenval', settokenval);
                console.log('getTokenval', getTokenval);
                console.log('response auth', response.data.data.token);
                return _context3.abrupt("return", dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["AUTH_DATA"],
                  data: response.data.data.token
                }));

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

var AddToCredit = function AddToCredit(productSlug) {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch) {
        var obj, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                //"product_TapsdvOdT8"
                obj = {
                  product: productSlug,
                  count: "1"
                };
                _context4.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("http://api.projectant.aasoo.ir/orders/cart/add/", Object(_components_CreateForm__WEBPACK_IMPORTED_MODULE_6__["createFormData"])(obj), getConfig(obj));

              case 3:
                response = _context4.sent;
                console.log('response for add to credit 444', response.data.data.cart_product.product);
                return _context4.abrupt("return", dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["ADD_TO_CREDIT"],
                  data: response.data.data.cart_product
                }));

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};

var fetchAddToCredit = function fetchAddToCredit(productSlug) {
  return function (dispatch) {
    return dispatch(AddToCredit(productSlug));
  };
}; // export const fetchCartDataIfNeeded = () => async ( dispatch) => {
//       let response =  await axios.post(`http://api.projectant.aasoo.ir/orders/cart/add/`, getConfig())
//       console.log('responseresponse',response)
//   return dispatch({type: actionTypes.GET_CART_DATA, data: response});
// };

var fetchCartData = function fetchCartData() {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(dispatch) {
        var body, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                //"product_TapsdvOdT8"
                body = null;
                _context5.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("http://api.projectant.aasoo.ir/orders/cart/show/", getConfig());

              case 3:
                response = _context5.sent;
                console.log('responseresponse', response);
                return _context5.abrupt("return", dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["GET_CART_DATA"],
                  data: response
                }));

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

var fetchCartDataIfNeeded = function fetchCartDataIfNeeded() {
  return function (dispatch) {
    return dispatch(fetchCartData());
  };
};

/***/ }),

/***/ "./actions/apiToReduxBridge.js":
/*!*************************************!*\
  !*** ./actions/apiToReduxBridge.js ***!
  \*************************************/
/*! exports provided: getAccessToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccessToken", function() { return getAccessToken; });
/* harmony import */ var _reducer_rootReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducer/rootReducer */ "./reducer/rootReducer.js");

var getAccessToken = function getAccessToken() {
  return Object(_reducer_rootReducer__WEBPACK_IMPORTED_MODULE_0__["getAuthToken"])() || null;
};

/***/ }),

/***/ "./agent.js":
/*!******************!*\
  !*** ./agent.js ***!
  \******************/
/*! exports provided: setToken, getToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
var _token;

var setToken = function setToken(token) {
  _token = token;
  console.log('_token', _token);
  return _token;
};
var getToken = function getToken() {
  return _token;
};

/***/ }),

/***/ "./api/createConfig.js":
/*!*****************************!*\
  !*** ./api/createConfig.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createConfig; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var STORE_ADDRESS = 'sib';
var API_KEY = '0f855b9c2f5ee2a21e530bcaa82a645286724fba';
var baseHttpConfig = {
  validateStatus: function validateStatus(status) {
    return status < 500;
  },
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'x-api-key': API_KEY,
    accept: 'application/json',
    'x-store-sub-address': STORE_ADDRESS
  }
};

var generateAuthHeaders = function generateAuthHeaders(accessToken) {
  return _objectSpread({}, baseHttpConfig.headers, {
    Authorization: "Token ".concat(accessToken)
  });
};

function createConfig(accessToken, additionalSettings) {
  if (!accessToken) {
    console.log('token not', accessToken);

    var _config = _objectSpread({}, baseHttpConfig, additionalSettings);

    return _config;
  }

  var headerSettings = {
    headers: generateAuthHeaders(accessToken)
  };
  console.log('headerSettings', headerSettings);

  var config = _objectSpread({}, baseHttpConfig, headerSettings, additionalSettings);

  return config;
}

/***/ }),

/***/ "./components/CreateForm.js":
/*!**********************************!*\
  !*** ./components/CreateForm.js ***!
  \**********************************/
/*! exports provided: createFormData, appendToFormData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFormData", function() { return createFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendToFormData", function() { return appendToFormData; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var createFormData = function createFormData(formObject) {
  var formData = new FormData();
  appendToFormData(formObject, formData);
  console.log('formData', formData);
  console.log('formObject', formObject);
  return formData;
};
function appendToFormData(formObject, formData) {
  for (var field in formObject) {
    if (formObject.hasOwnProperty(field)) {
      var fieldValue = formObject[field];

      if (fieldValue !== undefined) {
        if (_typeof(fieldValue) === "object") {
          if (typeof fieldValue.name === "string" && typeof fieldValue.size === "number") {
            // it's a file
            formData.append(field, fieldValue);
          } else {
            // it's an object
            if (Array.isArray(fieldValue)) {
              // array
              formData.append(field, JSON.stringify(fieldValue));
            } else {
              // plain object
              formData.append(field, JSON.stringify(fieldValue));
            }
          }
        } else {
          // it's not an object
          formData.append(field, fieldValue);
        }
      }
    }
  }
}

/***/ }),

/***/ "./components/FavatioyProducts.js":
/*!****************************************!*\
  !*** ./components/FavatioyProducts.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/GridList */ "@material-ui/core/GridList");
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/GridListTile */ "@material-ui/core/GridListTile");
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/GridListTileBar */ "@material-ui/core/GridListTileBar");
/* harmony import */ var _material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/StarBorder */ "@material-ui/icons/StarBorder");
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);







 // import CardWrapper from './CardWrapper'
// import Grid from '@material-ui/core/Grid';
// import { unstable_Box as Box } from '@material-ui/core/Box';

var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)'
    },
    title: {
      color: theme.palette.primary.light
    },
    titleBar: {
      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
    }
  };
};

var FavoritProducts = function FavoritProducts(favoritProducts) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Favorite Products"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_2___default.a, {
    cols: 3,
    style: {
      flexWrap: "nowrap",
      transform: "0"
    }
  }, favoritProducts.favoritProducts.data.products.map(function (product) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      key: product.address,
      as: "/p/".concat(product.address),
      href: "/post?address=".concat(product.address)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      style: {
        textDecoration: "none"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: {
        padding: "20px"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: product.thumbnail,
      style: {
        maxWidth: "30vw",
        maxHeight: "30vh"
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
      subtitle: product.price,
      title: product.title,
      price: product.price
    }), product.price)));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(FavoritProducts));

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actions */ "./actions/actions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchBar */ "./components/SearchBar.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _LogIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LogIn */ "./components/LogIn.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
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

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");


var layoutStyle = {
  margin: 20,
  padding: 20 //   border: '1px solid #DDD'

};

var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: layoutStyle
  }, "hello", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/LogIn.js":
/*!*****************************!*\
  !*** ./components/LogIn.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actions */ "./actions/actions.js");
/* harmony import */ var _CreateForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreateForm */ "./components/CreateForm.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var LogIn =
/*#__PURE__*/
function (_Component) {
  _inherits(LogIn, _Component);

  function LogIn() {
    var _this;

    _classCallCheck(this, LogIn);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LogIn).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleUsernameChange", function () {
      _this.setState({
        Username: _this.user.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePasswordChange", function () {
      _this.setState({
        Password: _this.pass.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "dispatchLogIn", function () {
      var dispatch = _this.props.dispatch;
      var values = {
        username: _this.state.Username,
        password: _this.state.Password
      };
      dispatch(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_2__["fetchlogInReqIfneeded"])(Object(_CreateForm__WEBPACK_IMPORTED_MODULE_3__["createFormData"])(values)));
    });

    _this.state = {
      Username: '',
      Password: ''
    };
    return _this;
  }

  _createClass(LogIn, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        placeholder: "Username",
        ref: function ref(input) {
          return _this2.user = input;
        },
        onChange: this.handleUsernameChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        placeholder: "Password",
        type: "password",
        ref: function ref(input) {
          return _this2.pass = input;
        },
        onChange: this.handlePasswordChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.dispatchLogIn
      }, "aaa"));
    }
  }]);

  return LogIn;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(LogIn));

/***/ }),

/***/ "./components/SearchBar.js":
/*!*********************************!*\
  !*** ./components/SearchBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actions */ "./actions/actions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var SearchBar =
/*#__PURE__*/
function (_Component) {
  _inherits(SearchBar, _Component);

  function SearchBar() {
    var _this;

    _classCallCheck(this, SearchBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchBar).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleInputChange", function () {
      _this.setState({
        value: _this.search.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "searchResult", function () {});

    _this.state = {
      value: ''
    };
    return _this;
  }

  _createClass(SearchBar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        placeholder: "Search for...",
        ref: function ref(input) {
          return _this2.search = input;
        },
        onChange: this.handleInputChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        as: "/search/".concat(this.state.value),
        href: "/search?address=".concat(this.state.value)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "search")));
    }
  }]);

  return SearchBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(SearchBar)); // export default Header

/***/ }),

/***/ "./components/addToBasket.js":
/*!***********************************!*\
  !*** ./components/addToBasket.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_createConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/createConfig */ "./api/createConfig.js");
/* harmony import */ var _CreateForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateForm */ "./components/CreateForm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jss */ "jss");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jss__WEBPACK_IMPORTED_MODULE_3__);





var addToBasket = function addToBasket(props) {
  var obj = {
    product: "product_lAZJwOg8VT",
    count: "1"
  };
  var response = axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("http://api.projectant.aasoo.ir/orders/cart/add/", Object(_CreateForm__WEBPACK_IMPORTED_MODULE_1__["createFormData"])(obj), createConfig());
  console.log("response", response);
};

/* harmony default export */ __webpack_exports__["default"] = (addToBasket);

/***/ }),

/***/ "./header.css":
/*!********************!*\
  !*** ./header.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_createConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/createConfig */ "./api/createConfig.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_FavatioyProducts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FavatioyProducts */ "./components/FavatioyProducts.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





 // import Styles from '../header.css'
// const styles = theme => ({
//   root: {
//     textAlign: 'center',
//     paddingTop: theme.spacing.unit * 20,
//   },
// });

var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      color: 'red'
    }
  }, "Simple Store"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FavatioyProducts__WEBPACK_IMPORTED_MODULE_5__["default"], {
    favoritProducts: props.shows
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, props.shows.data.products.map(function (product) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: product.address
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      as: "/p/".concat(product.address),
      href: "/post?address=".concat(product.address)
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      style: {
        color: 'red'
      }
    }, product.title)));
  }))));
};

Index.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var slug, category_address, response, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('asdf');
          slug = "food";
          category_address = "digital";
          _context.next = 5;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()( // `http://api.projectant.aasoo.ir/stores/store/sib/`,
          "http://api.projectant.aasoo.ir/shelves/products/", // `http://api.projectant.aasoo.ir/shelves/categories/list/`,
          // `http://api.projectant.aasoo.ir/shelves/category/address/${category_address}/products/`,
          // `http://api.projectant.aasoo.ir/shelves/categories/category/${slug}/`,
          // `http://api.projectant.aasoo.ir/auth/current-user/`,
          // `http://api.projectant.aasoo.ir/shelves/products/?search=`,
          Object(_api_createConfig__WEBPACK_IMPORTED_MODULE_3__["default"])());

        case 5:
          response = _context.sent;
          _context.next = 8;
          return response.json();

        case 8:
          data = _context.sent;
          return _context.abrupt("return", {
            shows: data
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_createConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/createConfig */ "./api/createConfig.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_addToBasket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/addToBasket */ "./components/addToBasket.js");



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var Post = function Post(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    container: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    lg: 1,
    md: 1,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "hil"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: _components_addToBasket__WEBPACK_IMPORTED_MODULE_6__["default"]
  }, "add to basket"), "name: ", props.show.data.product.address, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: props.show.data.product.thumbnail,
    style: {
      height: "50%",
      maxWidth: "auto"
    }
  }), "price: ", props.show.data.product.price)));
};

Post.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var address, res, show;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            address = context.query.address;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("http://api.projectant.aasoo.ir/shelves/product/address/".concat(encodeURIComponent(address), "/"), // `http://api.projectant.aasoo.ir/shelves/products/?search=${search}`,
            Object(_api_createConfig__WEBPACK_IMPORTED_MODULE_2__["default"])());

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            show = _context.sent;
            return _context.abrupt("return", {
              show: show
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./reducer/addToCreditReducer.js":
/*!***************************************!*\
  !*** ./reducer/addToCreditReducer.js ***!
  \***************************************/
/*! exports provided: addToCreditReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCreditReducer", function() { return addToCreditReducer; });
/* harmony import */ var _store_defaultStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/defaultStore */ "./store/defaultStore.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var addToCreditReducer = function addToCreditReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _store_defaultStore__WEBPACK_IMPORTED_MODULE_0__["default"];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === "ADD_TO_CREDIT") {
    console.log('action.product', action);

    var cartData = _objectSpread({}, state.products, _defineProperty({}, action.data.product, _objectSpread({}, state.products[action.data.product], {
      slug: action.data.product
    })));

    localStorage.setItem('cartData', JSON.stringify(cartData));
    return _objectSpread({}, state, {
      products: _objectSpread({}, state.products, _defineProperty({}, action.data.product, _objectSpread({}, state.products[action.data.product], {
        slug: action.data.product
      })))
    });
  } else return state;
};

/***/ }),

/***/ "./reducer/authReducer.js":
/*!********************************!*\
  !*** ./reducer/authReducer.js ***!
  \********************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _store_defaultStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/defaultStore */ "./store/defaultStore.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _store_defaultStore__WEBPACK_IMPORTED_MODULE_0__["default"];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === "AUTH_DATA") {
    return _objectSpread({}, state.auth, {
      token: action.data
    });
  } else return state;
};

/***/ }),

/***/ "./reducer/reducer.js":
/*!****************************!*\
  !*** ./reducer/reducer.js ***!
  \****************************/
/*! exports provided: categoriesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoriesReducer", function() { return categoriesReducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_defaultStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/defaultStore */ "./store/defaultStore.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var categoriesReducer = function categoriesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _store_defaultStore__WEBPACK_IMPORTED_MODULE_3__["default"];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === "CATEGORIES") {
    return _objectSpread({}, state, {
      data: action.data.data.categories
    });
  } else return state;
}; // const rootReducer = combineReducers({
//     categoriesReducer
// })
// export const initStore = (state = initialState) => {
//     return createStore(
//       rootReducer,
//       state,
//       composeWithDevTools(applyMiddleware(thunkMiddleware))
//     )
//   }
//   export default initStore

/***/ }),

/***/ "./reducer/rootReducer.js":
/*!********************************!*\
  !*** ./reducer/rootReducer.js ***!
  \********************************/
/*! exports provided: initStore, getAuthToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthToken", function() { return getAuthToken; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_defaultStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/defaultStore */ "./store/defaultStore.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer */ "./reducer/reducer.js");
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authReducer */ "./reducer/authReducer.js");
/* harmony import */ var _addToCreditReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addToCreditReducer */ "./reducer/addToCreditReducer.js");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! os */ "os");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_7__);









var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  categoriesReducer: _reducer__WEBPACK_IMPORTED_MODULE_4__["categoriesReducer"],
  authReducer: _authReducer__WEBPACK_IMPORTED_MODULE_5__["authReducer"],
  addToCreditReducer: _addToCreditReducer__WEBPACK_IMPORTED_MODULE_6__["addToCreditReducer"]
});
var initStore = function initStore() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _store_defaultStore__WEBPACK_IMPORTED_MODULE_3__["default"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(rootReducer, state, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));
};
function getAuthToken() {
  var myData = JSON.parse(localStorage.getItem('myData'));

  if (myData !== null) {
    console.log('localStorage.token', myData.token);
    return myData.token;
  } else {
    return null;
  } // try {
  //   return initStore.getState().auth.token
  // } 
  // catch (error) {
  //   return null
  // }

}

/***/ }),

/***/ "./store/defaultStore.js":
/*!*******************************!*\
  !*** ./store/defaultStore.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  auth: {
    isAuthenticated: false,
    token: ''
  },
  data: [],
  basket: {
    slug: '',
    count: '',
    total_price: ''
  },
  products: {}
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/GridList":
/*!*********************************************!*\
  !*** external "@material-ui/core/GridList" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridList");

/***/ }),

/***/ "@material-ui/core/GridListTile":
/*!*************************************************!*\
  !*** external "@material-ui/core/GridListTile" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridListTile");

/***/ }),

/***/ "@material-ui/core/GridListTileBar":
/*!****************************************************!*\
  !*** external "@material-ui/core/GridListTileBar" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridListTileBar");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/StarBorder":
/*!************************************************!*\
  !*** external "@material-ui/icons/StarBorder" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/StarBorder");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "jss":
/*!**********************!*\
  !*** external "jss" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map