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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/actionTypes.js":
/*!********************************!*\
  !*** ./actions/actionTypes.js ***!
  \********************************/
/*! exports provided: CATEGORIES, AUTH_DATA, ADD_TO_CREDIT, GET_CART_DATA, ADD_FILTER, GET_USER_DATA, CREATE_ORDER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORIES", function() { return CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_DATA", function() { return AUTH_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CREDIT", function() { return ADD_TO_CREDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CART_DATA", function() { return GET_CART_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_FILTER", function() { return ADD_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_DATA", function() { return GET_USER_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ORDER", function() { return CREATE_ORDER; });
var CATEGORIES = "CATEGORIES";
var AUTH_DATA = "AUTH_DATA";
var ADD_TO_CREDIT = "ADD_TO_CREDIT";
var GET_CART_DATA = "GET_CART_DATA";
var ADD_FILTER = "ADD_FILTER";
var GET_USER_DATA = "GET_USER_DATA";
var CREATE_ORDER = "CREATE_ORDER";

/***/ }),

/***/ "./actions/actions.js":
/*!****************************!*\
  !*** ./actions/actions.js ***!
  \****************************/
/*! exports provided: LOGIN_REQUEST, getConfig, fetchCategoriesIfneeded, fetchlogInReqIfneeded, fetchAuthDataForGuest, fetchAddToCredit, fetchCartDataIfNeeded, fetchUserDataIfNeeded, postUserAddressIfNeeded, deleteCartData, countChangeCartData */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserDataIfNeeded", function() { return fetchUserDataIfNeeded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postUserAddressIfNeeded", function() { return postUserAddressIfNeeded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCartData", function() { return deleteCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countChangeCartData", function() { return countChangeCartData; });
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




var LOGIN_REQUEST = "LOGIN_REQUEST";





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
                console.log("data", data); //sddf
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
                console.log("formDataformData", formData); // return axios.post(`${BASE_URL}/auth/login/`, formdata, getConfig(formdata))

                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("http://api.projectant.aasoo.ir/auth/login/", formData, getConfig(formData));

              case 3:
                response = _context2.sent;
                console.log("response auth token value", response);
                localStorage.setItem("myData", JSON.stringify(response.data.data));
                settokenval = Object(_agent__WEBPACK_IMPORTED_MODULE_7__["setToken"])(response.data.data);
                console.log("settokenval without value");
                console.log("settokenval", settokenval); // const data = await response.json();

                console.log("login data", response.data.data.token);
                return _context2.abrupt("return", dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["AUTH_DATA"],
                  data: response.data.data.token,
                  response: response
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
                console.log('response auth', response);
                console.log("JSON.stringify(response.data.data)", JSON.stringify(response.data.data));
                localStorage.setItem("myData", JSON.stringify(response.data.data));
                settokenval = Object(_agent__WEBPACK_IMPORTED_MODULE_7__["setToken"])(response.data.data.token);
                getTokenval = Object(_agent__WEBPACK_IMPORTED_MODULE_7__["getToken"])(response.data.data.token);
                console.log("getTokenval without value");
                console.log("settokenval", settokenval);
                console.log("getTokenval", getTokenval);
                console.log("response auth", response.data.data.token);
                return _context3.abrupt("return", dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["AUTH_DATA"],
                  data: response.data.data.token
                }));

              case 13:
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
                console.log("response for add to credit 444", response); // console.log('response for add to credit 444',response.data.data.cart_product.product)
                // return dispatch({
                //   type: actionTypes.ADD_TO_CREDIT,
                //   data: response.data.data.cart_product
                // });

                return _context4.abrupt("return", dispatch(fetchCartDataIfNeeded()));

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
                console.log('inside fetch cart'); //"product_TapsdvOdT8"

                body = null;
                _context5.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("http://api.projectant.aasoo.ir/orders/cart/show/", getConfig());

              case 4:
                response = _context5.sent;
                console.log("responseresponse", response);
                return _context5.abrupt("return", dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["GET_CART_DATA"],
                  data: response.data.data.cart
                }));

              case 7:
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
var fetchUserDataIfNeeded = function fetchUserDataIfNeeded() {
  return function (dispatch) {
    console.log("buullshit");
    return dispatch(fetchUserData());
  };
};

var fetchUserData = function fetchUserData() {
  return (
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(dispatch) {
        var response, myData, id, res, resAddress;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("http://api.projectant.aasoo.ir/orders/cart/show/", getConfig());

              case 2:
                response = _context6.sent;
                console.log('responseresponse', response);
                myData = JSON.parse(localStorage.getItem('myData'));

                if (myData.user) {
                  id = myData.user.id;
                  console.log('cachedHits', myData.user.id);
                } else {
                  id = myData.id;
                  console.log('cachedHits', myData.id);
                }

                _context6.next = 8;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("http://api.projectant.aasoo.ir/profiles/profile/".concat(id, "/"), // `http://api.projectant.aasoo.ir/auth/current-user/`,
                getConfig());

              case 8:
                res = _context6.sent;
                _context6.next = 11;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("  http://api.projectant.aasoo.ir/profiles/address/list/\n  ", getConfig());

              case 11:
                resAddress = _context6.sent;
                dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["GET_USER_DATA"],
                  cartData: response.data.data.cart,
                  userData: res.data.data.profile,
                  address: resAddress.data.data
                });

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
};

var postUserAddressIfNeeded = function postUserAddressIfNeeded(obj) {
  return function (dispatch) {
    return dispatch(postUserAddress(obj));
  };
};

var postUserAddress = function postUserAddress(obj) {
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(dispatch) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("http://api.projectant.aasoo.ir/profiles/address/add/", Object(_components_CreateForm__WEBPACK_IMPORTED_MODULE_6__["createFormData"])(obj), getConfig());

              case 2:
                response = _context7.sent;

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x7) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
};

var deleteCartData = function deleteCartData(obj) {
  return (
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(dispatch) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("http://api.projectant.aasoo.ir/orders/cart/remove/", Object(_components_CreateForm__WEBPACK_IMPORTED_MODULE_6__["createFormData"])(obj), getConfig());

              case 2:
                response = _context8.sent;
                return _context8.abrupt("return", dispatch(fetchCartDataIfNeeded()));

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function (_x8) {
        return _ref8.apply(this, arguments);
      };
    }()
  );
};
var countChangeCartData = function countChangeCartData(obj) {
  return (
    /*#__PURE__*/
    function () {
      var _ref9 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(dispatch) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("http://api.projectant.aasoo.ir/orders/cart/set/", Object(_components_CreateForm__WEBPACK_IMPORTED_MODULE_6__["createFormData"])(obj), getConfig(obj));

              case 2:
                response = _context9.sent;
                return _context9.abrupt("return", dispatch(fetchCartDataIfNeeded()));

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function (_x9) {
        return _ref9.apply(this, arguments);
      };
    }()
  );
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

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/InputBase */ "@material-ui/core/InputBase");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Badge */ "@material-ui/core/Badge");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "@material-ui/core/styles/colorManipulator");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "@material-ui/icons/AccountCircle");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Mail */ "@material-ui/icons/Mail");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "@material-ui/icons/Notifications");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "@material-ui/icons/MoreVert");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../actions/actions */ "./actions/actions.js");
/* harmony import */ var _general_TemporaryDrawer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./general/TemporaryDrawer */ "./components/general/TemporaryDrawer.js");
/* harmony import */ var _login_loginDialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./login/loginDialog */ "./components/login/loginDialog.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _handleLoading__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./handleLoading */ "./components/handleLoading.js");
/* harmony import */ var _headerStyle_css__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./headerStyle.css */ "./components/headerStyle.css");
/* harmony import */ var _headerStyle_css__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_headerStyle_css__WEBPACK_IMPORTED_MODULE_26__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























 // import TemporaryDrawer from "./general/TemporaryDrawer";




var styles = function styles(theme) {
  var _sectionWide;

  return {
    root: {
      backgroundColor: "red",
      width: "100%"
    },
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    },
    title: _defineProperty({
      display: "none"
    }, theme.breakpoints.up("sm"), {
      display: "block"
    }),
    search: _defineProperty({
      display: "flex",
      flexDirection: "row",
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_11__["fade"])(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_11__["fade"])(theme.palette.common.white, 0.25)
      },
      marginRight: theme.spacing.unit * 2,
      marginLeft: 0,
      width: "100%"
    }, theme.breakpoints.up("sm"), {
      marginLeft: theme.spacing.unit * 3 // width: "auto"

    }),
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      direction: "rtl",
      color: "inherit",
      width: "100%"
    },
    inputInput: _defineProperty({
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create("width"),
      width: "100%"
    }, theme.breakpoints.up("md"), {
      width: 200
    }),
    sectionDesktop: _defineProperty({
      display: "none"
    }, theme.breakpoints.up("md"), {
      display: "flex"
    }),
    sectionMobile: _defineProperty({
      display: "flex"
    }, theme.breakpoints.up("md"), {
      display: "none"
    }),
    sectionWide: (_sectionWide = {
      display: "flex",
      flexDirection: "row"
    }, _defineProperty(_sectionWide, "display", "flex"), _defineProperty(_sectionWide, theme.breakpoints.down("sm"), {
      display: "none"
    }), _sectionWide)
  };
};

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleProfileMenuOpen", function (event) {
      _this.setState({
        anchorEl: event.currentTarget
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMenuClose", function () {
      _this.setState({
        anchorEl: null
      });

      _this.handleMobileMenuClose();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMobileMenuOpen", function (event) {
      _this.setState({
        mobileMoreAnchorEl: event.currentTarget
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMobileMenuClose", function () {
      _this.setState({
        mobileMoreAnchorEl: null
      });
    });

    _this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
      clickFistChart: "none",
      click: "none",
      cartData: {}
    };
    _this.localStorageUpdate = _this.localStorageUpdate.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var dispatch, myData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch = this.props.dispatch;
                _context.next = 3;
                return dispatch(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_20__["fetchCategoriesIfneeded"])());

              case 3:
                if (Object.entries(this.props.cartDataOrigin).length) {
                  _context.next = 6;
                  break;
                }

                _context.next = 6;
                return dispatch(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_20__["fetchCartDataIfNeeded"])());

              case 6:
                console.log('!Object.keys(localStorage.myData).length', localStorage.myData); //  console.log('!Object.keys(localStorage.myData).length',Object.keys(localStorage.myData).length)

                if (!(localStorage.myData === undefined || !Object.keys(localStorage.myData).length)) {
                  _context.next = 10;
                  break;
                }

                _context.next = 10;
                return dispatch(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_20__["fetchAuthDataForGuest"])());

              case 10:
                myData = JSON.parse(localStorage.getItem("myData"));
                console.log("myDatamyData", myData); // console.log('myDatamyData.guest',myData.guest)

                if (myData !== undefined || !Object.keys(myData).length) {
                  if (myData.guest) {
                    this.setState({
                      guest: true
                    });
                  } else {
                    this.setState({
                      guest: false
                    });
                    this.setState({
                      userName: myData.user.first_name
                    });
                  }
                }

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "handleChange",
    value: function handleChange(data) {
      console.log("data", data);
      this.setState({
        searchData: data
      });
    }
  }, {
    key: "localStorageUpdate",
    value: function localStorageUpdate() {
      console.log('222333');
      var myData = JSON.parse(localStorage.getItem("myData"));

      if (myData.user) {
        this.setState({
          guest: false
        });
        this.setState({
          userName: myData.user.first_name
        });
        console.log('myData.user.first_name', myData.user.first_name);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var dispatch = this.props.dispatch;
      var _this$state = this.state,
          anchorEl = _this$state.anchorEl,
          mobileMoreAnchorEl = _this$state.mobileMoreAnchorEl;
      var classes = this.props.classes;
      var isMenuOpen = Boolean(anchorEl);
      var isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
      var renderMenu = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_10___default.a, {
        anchorEl: anchorEl,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        open: isMenuOpen,
        onClose: this.handleMenuClose
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
        onClick: this.handleMenuClose
      }, "Profile"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
        onClick: this.handleMenuClose
      }, "My account"));
      var renderMobileMenu = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_10___default.a, {
        anchorEl: mobileMoreAnchorEl,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        open: isMobileMenuOpen,
        onClose: this.handleMenuClose
      }, console.log("ssss", this.props.data), this.props.data.map(function (category) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_23___default.a, {
          as: "/category/".concat(category.address),
          href: "/category?address=".concat(category.address)
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          style: {
            cursor: "pointer",
            textDecoration: "none"
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
          onClick: _this2.handleMobileMenuClose
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          onClick: function onClick() {
            return Object(_handleLoading__WEBPACK_IMPORTED_MODULE_25__["handleLoading"])(dispatch);
          }
        }, category.title))));
      }));
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.root
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default.a, {
        position: "static",
        style: {
          backgroundColor: "white",
          color: "black",
          boxShadow: "none"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
        style: {
          display: "flex",
          flexDirection: "row"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.sectionMobile
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: classes.menuButton,
        color: "inherit",
        "aria-label": "Open drawer",
        onClick: this.handleMobileMenuOpen
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
        primaryText: "Refresh"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "ssss"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.search
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_23___default.a, {
        as: "/search/".concat(this.state.searchData),
        href: "/search?address=".concat(this.state.searchData)
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_23___default.a, {
        as: "/search/".concat(this.state.searchData),
        href: "/search?address=".concat(this.state.searchData)
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        style: {
          color: "black"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_14___default.a, null)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_7___default.a // onChange={()=> console.log(11)}
      , {
        onChange: function onChange(ref) {
          return _this2.handleChange(ref.target.value);
        },
        placeholder: "\u062C\u0633\u062A\u062C\u0648",
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput
        }
      }), console.log("this.state.guest", this.state.guest), this.state.guest !== undefined && (this.state.guest === true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          whiteSpace: "nowrap",
          margin: "0px 10px"
        }
      }, "\u062B\u0628\u062A \u0646\u0627\u0645"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          whiteSpace: "nowrap",
          margin: "0px 10px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_login_loginDialog__WEBPACK_IMPORTED_MODULE_22__["default"], {
        onlocalStorageUpdate: this.localStorageUpdate,
        text: "ورود"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_general_TemporaryDrawer__WEBPACK_IMPORTED_MODULE_21__["default"], null)) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          whiteSpace: "nowrap",
          margin: "0px 10px"
        }
      }, console.log("localStoragelocalStoragelocalStorage", localStorage), this.state.userName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_general_TemporaryDrawer__WEBPACK_IMPORTED_MODULE_21__["default"], null)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.grow
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.sectionDesktop
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.sectionMobile
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
        "aria-haspopup": "true",
        onClick: this.handleMobileMenuOpen,
        color: "inherit"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_18___default.a, null)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_24___default.a, {
        variant: "middle"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.sectionWide
      }, this.props.data.map(function (category) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_23___default.a, {
          as: "/category/".concat(category.address),
          href: "/category?address=".concat(category.address)
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          style: {
            cursor: "pointer",
            textDecoration: "none"
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a //   className={classes.title}
        // variant="h6"
        // color="inherit"
        // noWrap
        , null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          onClick: function onClick() {
            return Object(_handleLoading__WEBPACK_IMPORTED_MODULE_25__["handleLoading"])(dispatch);
          },
          className: "categoriesTitle"
        }, category.title))));
      }))), renderMenu, renderMobileMenu);
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    // data: state.categoriesReducer.data
    data: state.categoriesReducer.data,
    auth: state.authReducer.token,
    slug: state.addToCreditReducer.slug,
    price: state.addToCreditReducer.total_price,
    products: state.addToCreditReducer.products,
    cartDataOrigin: state.getCartDataReducer.cartDataOrigin,
    loading: state.handleLoadingReducer.loading
  };
};

Header.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_19__["connect"])(mapStateToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["withStyles"])(styles)(Header))); // export default withStyles(styles)(Header);

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
  margin: 10,
  padding: 10
};

var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: layoutStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

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
};

/* harmony default export */ __webpack_exports__["default"] = (addToBasket);

/***/ }),

/***/ "./components/checkout/CostumerData.js":
/*!*********************************************!*\
  !*** ./components/checkout/CostumerData.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/actionTypes */ "./actions/actionTypes.js");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/actions */ "./actions/actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _login_loginDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/loginDialog */ "./components/login/loginDialog.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









var validate = function validate(values) {
  var errors = {};

  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.age) {
    errors.age = "Required";
  } else if (isNaN(Number(values.age))) {
    errors.age = "Must be a number";
  } else if (Number(values.age) < 18) {
    errors.age = "Sorry, you must be at least 18 years old";
  }

  return errors;
};

var warn = function warn(values) {
  var warnings = {};

  if (values.age < 19) {
    warnings.age = "Hmm, you seem a bit young...";
  }

  return warnings;
};

var renderField = function renderField(_ref) {
  var input = _ref.input,
      label = _ref.label,
      type = _ref.type,
      className = _ref.className,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      warning = _ref$meta.warning;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, input, {
    placeholder: label,
    type: type,
    className: className
  })), touched && (error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, error) || warning && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, warning))));
};

var CostumerData =
/*#__PURE__*/
function (_Component) {
  _inherits(CostumerData, _Component);

  _createClass(CostumerData, [{
    key: "handleSubmit",
    value: function handleSubmit(values) {
      var dispatch = this.props.dispatch; // console.log("State:", this.state.MyStateElement);

      console.log("Form values:", values);
      var orderData = {
        first_name: values.name,
        phone_number: values.phone,
        email: values.email,
        address: values.address,
        address_title: values.title,
        postal_code: values.postal_code
      };
      console.log("this.state.address", this.state.address);

      if (this.state.address) {
        orderData.address = this.state.address.address;
        orderData.address_title = this.state.address.title;
        orderData.postal_code = this.state.address.postal_code;
      }

      console.log("orderData", orderData);
      dispatch({
        type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["CREATE_ORDER"],
        orderData: orderData
      }); // dispatch(postUserAddressIfNeeded(address))

      this.props.handleNext();
    }
  }, {
    key: "handleChange",
    value: function handleChange(value) {
      console.log("value", value);
      var selectedAddress = this.props.address.filter(function (el) {
        return el.slug === value;
      });
      selectedAddress = selectedAddress[0];
      console.log("selectedAddress", selectedAddress);
      this.setState({
        address: selectedAddress
      });
    }
  }]);

  function CostumerData() {
    var _this;

    _classCallCheck(this, CostumerData);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CostumerData).call(this));
    _this.state = {
      address: null
    };
    return _this;
  } // const CostumerData = props => {


  _createClass(CostumerData, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          placeholder = _this$props.placeholder,
          handleSubmit = _this$props.handleSubmit,
          pristine = _this$props.pristine,
          reset = _this$props.reset,
          submitting = _this$props.submitting;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: handleSubmit(this.handleSubmit.bind(this)),
        placeholder: placeholder // onSubmit={handleSubmit}

      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "flex",
          lineHeight: "26px",
          verticalAlign: "middle"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "textLabel"
      }, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u062A\u0645\u0627\u0633"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_login_loginDialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onlocalStorageUpdate: this.localStorageUpdate,
        text: "ورود"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
        className: "border defualtInput",
        name: "name",
        type: "text",
        component: renderField,
        label: "\u0646\u0627\u0645 \u0648 \u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
        className: "defualtInput",
        name: "phone",
        type: "number",
        component: renderField,
        placeholder: "111",
        label: "\u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
        className: "defualtInput",
        name: "email",
        type: "email",
        component: renderField //   label="Email"
        ,
        placeholder: "\u0627\u06CC\u0645\u06CC\u0644"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "textLabel"
      }, "\u0627\u062F\u0631\u0633 \u0627\u0631\u0633\u0627\u0644"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
        className: "defualtInput",
        name: "title",
        type: "text",
        component: renderField,
        label: "\u0646\u0627\u0645 \u0622\u062F\u0631\u0633 \u0645\u062B\u0644\u0627 \u062E\u0627\u0646\u0647 \u06CC\u0627 \u0634\u0631\u06A9\u062A"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
        className: "halftInput",
        name: "favoriteColor",
        component: "select",
        label: "\u0627\u0633\u062A\u0627\u0646"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "ff0000"
      }, "Red"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "00ff00"
      }, "Green"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "0000ff"
      }, "Blue")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
        className: "halftInput",
        name: "favoriteColor2",
        component: "select",
        label: "\u0634\u0647\u0631"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "ff0000"
      }, "Red"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "00ff00"
      }, "Green"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "0000ff"
      }, "Blue"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
        className: "addressInput" // style={{height:'150px'}}
        ,
        name: "address",
        type: "text",
        component: renderField,
        label: "\u0622\u062F\u0631\u0633"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
        className: "defualtInput",
        name: "postal_code",
        type: "text",
        component: renderField,
        placeholder: "Placeholder",
        label: "\u06A9\u062F \u067E\u0633\u062A\u06CC"
      }), console.log("this.props.address", this.props.address), this.props.address && this.props.address.map(function (el) {
        return (// <Field name="age" type="number" component={renderField} label="Age" />
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, console.log("lll", el), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            type: "radio",
            name: "name",
            value: el.slug,
            onChange: function onChange(ref) {
              return _this2.handleChange(ref.target.value);
            }
          }), el.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u062A\u0644\u0641\u0646 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", null, el.phone_number)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u06A9\u062F \u067E\u0633\u062A\u06CC ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", null, el.postal_code)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u0622\u062F\u0631\u0633 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", null, el.address))))
        );
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        disabled: submitting
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        disabled: submitting,
        onClick: function onClick() {
          return _this2.props.handleBack();
        }
      }, "back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        disabled: pristine || submitting,
        onClick: reset
      }, "Clear Values")));
    }
  }]);

  return CostumerData;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // export default reduxForm({
//   form: "syncValidation", // a unique identifier for this form
//   validate, // <--- validation function given to redux-form
//   warn // <--- warning function given to redux-form
// })(CostumerData);


var mapStateToProps = function mapStateToProps(state) {
  return {
    payment_methods: state.userDataReducer.cartData.payment_methods,
    orderData: state.userDataReducer.orderData,
    address: state.userDataReducer.address.addresss
  };
};

CostumerData = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(CostumerData);
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["reduxForm"])({
  form: "syncValidation",
  // a unique identifier for this form
  validate: validate,
  // <--- validation function given to redux-form
  warn: warn // <--- warning function given to redux-form

})(CostumerData));

/***/ }),

/***/ "./components/checkout/PaymentMethod.js":
/*!**********************************************!*\
  !*** ./components/checkout/PaymentMethod.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/actionTypes */ "./actions/actionTypes.js");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/actions */ "./actions/actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _checkout_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout.css */ "./components/checkout/checkout.css");
/* harmony import */ var _checkout_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_checkout_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








 // import './checkout.scss'

var validate = function validate(values) {
  var errors = {};

  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.age) {
    errors.age = "Required";
  } else if (isNaN(Number(values.age))) {
    errors.age = "Must be a number";
  } else if (Number(values.age) < 18) {
    errors.age = "Sorry, you must be at least 18 years old";
  }

  return errors;
};

var warn = function warn(values) {
  var warnings = {};

  if (values.age < 19) {
    warnings.age = "Hmm, you seem a bit young...";
  }

  return warnings;
};

var renderField = function renderField(_ref) {
  var input = _ref.input,
      label = _ref.label,
      type = _ref.type,
      value = _ref.value,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      warning = _ref$meta.warning;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, input, {
    placeholder: label,
    type: type,
    value: value
  })), touched && (error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, error) || warning && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, warning))));
};

var PaymentMethod =
/*#__PURE__*/
function (_Component) {
  _inherits(PaymentMethod, _Component);

  function PaymentMethod() {
    var _this;

    _classCallCheck(this, PaymentMethod);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PaymentMethod).call(this));
    _this.state = {
      email: "",
      phone_number: "",
      address: "",
      payment_method: ''
    };
    return _this;
  }

  _createClass(PaymentMethod, [{
    key: "handleEdit",
    value: function handleEdit(target) {
      var dispatch = this.props.dispatch; // console.log("State:", this.state.MyStateElement);

      var orderData = this.props.orderData;
      orderData[target] = this.state[target]; // orderData.phone_number = this.state.phone_number
      // orderData.address = this.state.address

      console.log("orderData", orderData);
      dispatch({
        type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["CREATE_ORDER"],
        orderData: orderData
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(values) {
      var dispatch = this.props.dispatch; // // console.log("State:", this.state.MyStateElement);

      var orderData = this.props.orderData; // let orderData = this.state

      console.log('orderDataorderData', orderData);
      orderData.email = this.state.email;
      orderData.phone_number = this.state.phone_number;
      orderData.address = this.state.address;
      orderData.payment_method = this.state.payment_method;
      console.log("orderData", orderData);
      dispatch({
        type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["CREATE_ORDER"],
        orderData: orderData
      }); // dispatch(postUserAddressIfNeeded(address))
      // this.props.handleNext();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props.orderData);
      this.setState({
        email: this.props.orderData.email,
        phone_number: this.props.orderData.phone_number,
        address: this.props.orderData.address
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(target, value) {
      console.log("target", value);
      this.setState(_defineProperty({}, target, value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          placeholder = _this$props.placeholder,
          handleSubmit = _this$props.handleSubmit,
          pristine = _this$props.pristine,
          reset = _this$props.reset,
          submitting = _this$props.submitting;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: handleSubmit(this.handleSubmit.bind(this)),
        placeholder: placeholder // onSubmit={handleSubmit}

      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u062A\u0645\u0627\u0633"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          borderColor: 'grey',
          borderStyle: 'solid',
          borderRadius: '5px',
          width: '45vw'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "embed-submit-field"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "inputWithEdit",
        name: "email",
        type: "email",
        component: renderField,
        placeholder: this.state.email,
        value: this.state.email,
        onChange: function onChange(ref) {
          return _this2.handleChange("email", ref.target.value);
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "edit",
        onClick: function onClick() {
          return _this2.handleEdit("email");
        }
      }, "\u0648\u06CC\u0631\u0627\u06CC\u0634")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6___default.a, {
        variant: "middle"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "embed-submit-field"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "inputWithEdit",
        name: "phone_number",
        type: "number",
        component: renderField,
        placeholder: this.state.phone_number,
        value: this.state.phone_number,
        onChange: function onChange(ref) {
          return _this2.handleChange("phone_number", ref.target.value);
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "edit"
      }, "\u0648\u06CC\u0631\u0627\u06CC\u0634")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6___default.a, {
        variant: "middle"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "embed-submit-field"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "inputWithEdit",
        name: "address",
        type: "text",
        component: renderField,
        placeholder: this.state.address,
        value: this.state.address,
        onChange: function onChange(ref) {
          return _this2.handleChange("address", ref.target.value);
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "edit"
      }, "\u0648\u06CC\u0631\u0627\u06CC\u0634"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u0631\u0648\u0634 \u067E\u0631\u062F\u0627\u062E\u062A"), this.props.payment_methods.map(function (payment_method) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "radioInput" // style={{display: 'flex',flexShrink: 1,borderStyle: 'solid', margin:'10px'}}

        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "radio",
          name: "name",
          value: payment_method.name,
          onChange: function onChange(ref) {
            return _this2.handleChange('payment_method', ref.target.value);
          }
        }), payment_method.title);
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        disabled: submitting
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        disabled: submitting,
        onClick: function onClick() {
          return _this2.props.handleBack();
        }
      }, "back")));
    }
  }]);

  return PaymentMethod;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    payment_methods: state.userDataReducer.cartData.payment_methods,
    orderData: state.userDataReducer.orderData
  };
};

PaymentMethod = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(PaymentMethod);
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["reduxForm"])({
  form: "syncValidation",
  // a unique identifier for this form
  validate: validate,
  // <--- validation function given to redux-form
  warn: warn // <--- warning function given to redux-form

})(PaymentMethod));

/***/ }),

/***/ "./components/checkout/SendingMethod.js":
/*!**********************************************!*\
  !*** ./components/checkout/SendingMethod.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/actionTypes */ "./actions/actionTypes.js");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/actions */ "./actions/actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _checkout_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout.css */ "./components/checkout/checkout.css");
/* harmony import */ var _checkout_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_checkout_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _login_loginDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login/loginDialog */ "./components/login/loginDialog.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









 // import './checkout.scss'

var validate = function validate(values) {
  var errors = {};

  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.age) {
    errors.age = "Required";
  } else if (isNaN(Number(values.age))) {
    errors.age = "Must be a number";
  } else if (Number(values.age) < 18) {
    errors.age = "Sorry, you must be at least 18 years old";
  }

  return errors;
};

var warn = function warn(values) {
  var warnings = {};

  if (values.age < 19) {
    warnings.age = "Hmm, you seem a bit young...";
  }

  return warnings;
};

var renderField = function renderField(_ref) {
  var input = _ref.input,
      label = _ref.label,
      type = _ref.type,
      value = _ref.value,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      warning = _ref$meta.warning;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, input, {
    placeholder: label,
    type: type,
    value: value
  })), touched && (error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, error) || warning && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, warning))));
};

var SendigMethod =
/*#__PURE__*/
function (_Component) {
  _inherits(SendigMethod, _Component);

  function SendigMethod() {
    var _this;

    _classCallCheck(this, SendigMethod);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SendigMethod).call(this));
    _this.state = {
      email: "",
      phone_number: "",
      address: ""
    };
    return _this;
  }

  _createClass(SendigMethod, [{
    key: "handleEdit",
    value: function handleEdit(target) {
      var dispatch = this.props.dispatch; // console.log("State:", this.state.MyStateElement);

      var orderData = this.props.orderData;
      orderData[target] = this.state[target]; // orderData.phone_number = this.state.phone_number
      // orderData.address = this.state.address

      console.log("orderData", orderData);
      dispatch({
        type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["CREATE_ORDER"],
        orderData: orderData
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(values) {
      // const { dispatch } = this.props;
      // // console.log("State:", this.state.MyStateElement);
      var orderData = this.props.orderData; // orderData.email = this.state.email
      // orderData.phone_number = this.state.phone_number
      // orderData.address = this.state.address

      console.log("orderData", orderData); // dispatch({ type: actionTypes.CREATE_ORDER, orderData: orderData });
      // dispatch(postUserAddressIfNeeded(address))

      this.props.handleNext();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props.orderData);
      this.setState({
        email: this.props.orderData.email,
        phone_number: this.props.orderData.phone_number,
        address: this.props.orderData.address
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(target, value) {
      console.log("target", target, value);
      this.setState(_defineProperty({}, target, value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          placeholder = _this$props.placeholder,
          handleSubmit = _this$props.handleSubmit,
          pristine = _this$props.pristine,
          reset = _this$props.reset,
          submitting = _this$props.submitting;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: handleSubmit(this.handleSubmit.bind(this)),
        placeholder: placeholder // onSubmit={handleSubmit}

      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u062A\u0645\u0627\u0633"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_login_loginDialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onlocalStorageUpdate: this.localStorageUpdate,
        text: "ورود"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          borderColor: 'grey',
          borderStyle: 'solid',
          borderRadius: '5px',
          width: '45vw'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "embed-submit-field"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "inputWithEdit",
        name: "email",
        type: "email",
        component: renderField,
        placeholder: this.state.email,
        value: this.state.email,
        onChange: function onChange(ref) {
          return _this2.handleChange("email", ref.target.value);
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "edit",
        onClick: function onClick() {
          return _this2.handleEdit("email");
        }
      }, "\u0648\u06CC\u0631\u0627\u06CC\u0634")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6___default.a, {
        variant: "middle"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "embed-submit-field"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "inputWithEdit",
        name: "phone_number",
        type: "number",
        component: renderField,
        placeholder: this.state.phone_number,
        value: this.state.phone_number,
        onChange: function onChange(ref) {
          return _this2.handleChange("phone_number", ref.target.value);
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "edit"
      }, "\u0648\u06CC\u0631\u0627\u06CC\u0634")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6___default.a, {
        variant: "middle"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "embed-submit-field"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "inputWithEdit",
        name: "address",
        type: "text",
        component: renderField,
        placeholder: this.state.address,
        value: this.state.address,
        onChange: function onChange(ref) {
          return _this2.handleChange("address", ref.target.value);
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "edit"
      }, "\u0648\u06CC\u0631\u0627\u06CC\u0634"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u0631\u0648\u0634 \u0627\u0631\u0633\u0627\u0644"), console.log('this.props.cartData', this.props.cartData), this.props.shipping_methods.map(function (shipping_method) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "radioInput" // style={{display: 'flex',flexShrink: 1,borderStyle: 'solid', margin:'10px'}}

        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "radio",
          name: "name" // onChange={()=> this.handleChange('shippig_method')}

        }), shipping_method.title, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "radioTextPrice" // style={{position:'absolute',left:'35px'}}

        }, _this2.props.cartData.delivery_price));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        disabled: submitting
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        disabled: submitting,
        onClick: function onClick() {
          return _this2.props.handleBack();
        }
      }, "back")));
    }
  }]);

  return SendigMethod;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    cartData: state.userDataReducer.cartData,
    shipping_methods: state.userDataReducer.cartData.shipping_methods,
    orderData: state.userDataReducer.orderData
  };
};

SendigMethod = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(SendigMethod);
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["reduxForm"])({
  form: "syncValidation",
  // a unique identifier for this form
  validate: validate,
  // <--- validation function given to redux-form
  warn: warn // <--- warning function given to redux-form

})(SendigMethod));

/***/ }),

/***/ "./components/checkout/checkout.css":
/*!******************************************!*\
  !*** ./components/checkout/checkout.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/general/ResponsiveDrawer.css":
/*!*************************************************!*\
  !*** ./components/general/ResponsiveDrawer.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/general/ResponsiveDrawer.js":
/*!************************************************!*\
  !*** ./components/general/ResponsiveDrawer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "@material-ui/icons/MoveToInbox");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Mail */ "@material-ui/icons/Mail");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "@material-ui/core/ButtonBase");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../actions/actions */ "./actions/actions.js");
/* harmony import */ var _ResponsiveDrawer_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ResponsiveDrawer.css */ "./components/general/ResponsiveDrawer.css");
/* harmony import */ var _ResponsiveDrawer_css__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_ResponsiveDrawer_css__WEBPACK_IMPORTED_MODULE_24__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























var drawerWidth = 240;

var styles = function styles(theme) {
  return {
    image: {
      width: 128,
      height: 128
    },
    img: {
      width: 128,
      height: 128,
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%"
    },
    rootResponsive: {
      padding: "20px",
      flexGrow: 1
    },
    root: {
      display: "flex"
    },
    drawer: _defineProperty({}, theme.breakpoints.up("sm"), {
      width: drawerWidth,
      flexShrink: 0
    }),
    appBar: _defineProperty({
      marginLeft: drawerWidth
    }, theme.breakpoints.up("sm"), {
      display: "none"
    }),
    menuButton: _defineProperty({
      marginRight: 20
    }, theme.breakpoints.up("sm"), {
      display: "none"
    }),
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      minWidth: "30vw",
      borderRight: "solid rgba(0, 0, 0, 0.12)",
      position: "absolute",
      left: "-111111111px",
      width: drawerWidth
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3
    }
  };
};

var ResponsiveDrawer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ResponsiveDrawer, _React$Component);

  function ResponsiveDrawer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ResponsiveDrawer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ResponsiveDrawer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      mobileOpen: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDrawerToggle", function () {
      _this.setState(function (state) {
        return {
          mobileOpen: !state.mobileOpen
        };
      });
    });

    return _this;
  }

  _createClass(ResponsiveDrawer, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var dispatch;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch = this.props.dispatch;
                _context.next = 3;
                return dispatch(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_23__["fetchCartDataIfNeeded"])());

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "handleCountChange",
    value: function handleCountChange(count, slug) {
      var dispatch = this.props.dispatch;
      var formData = {
        count: count,
        product: slug
      };
      dispatch(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_23__["countChangeCartData"])(formData));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          theme = _this$props.theme;
      var drawer = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, console.log("this.props.cartDataOrigin", this.props.cartDataOrigin), this.props.cartDataOrigin && this.props.cartDataOrigin.cart_products.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.rootResponsive
        }, console.log("productproductproduct", product), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19___default.a, {
          container: true,
          spacing: 16
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19___default.a, {
          item: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          className: "border imgDrawer" // className={classes.img}
          ,
          alt: "complex",
          src: product.product.thumbnail
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19___default.a, {
          style: {
            marginTop: "15px",
            display: 'inline',
            float: 'left'
          },
          item: true,
          xs: 12,
          sm: true,
          container: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19___default.a, {
          style: {
            display: 'inline',
            float: 'left',
            padding: '5px'
          },
          item: true,
          xs: true,
          container: true,
          direction: "column",
          spacing: 16
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19___default.a, {
          style: {
            padding: '0px'
          },
          item: true,
          xs: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_21___default.a, {
          gutterBottom: true,
          variant: "subtitle1"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_21___default.a, {
          gutterBottom: true
        }, product.product.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19___default.a, {
          className: "inlineBlock" // style={{display:"inline-block"}}
          ,
          item: true,
          container: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19___default.a, {
          className: "inlineBlock" // style={{display:"inline-block"}} 
          ,
          item: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_21___default.a, {
          color: "textSecondary"
        }, product.product.price)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "floatLeft",
          style: {
            // float:'left',
            display: 'flex'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19___default.a, {
          item: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          style: {
            borderRadius: "0px 10px 10px 0px",
            boxShadow: "none",
            border: 'solid grey',
            background: 'none',
            height: "22px"
          },
          onClick: function onClick() {
            return _this2.handleCountChange(product.count - 1, product.product.slug);
          }
        }, "-")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19___default.a, {
          item: true,
          style: {
            padding: "3px 6px",
            border: "solid",
            height: "22px"
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, product.count)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19___default.a, {
          item: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          style: {
            borderRadius: "10px 0px 0px 10px",
            boxShadow: "none",
            border: 'solid grey',
            background: 'none',
            height: "22px"
          },
          onClick: function onClick() {
            return _this2.handleCountChange(product.count + 1, product.product.slug);
          }
        }, "+")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19___default.a, {
          item: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_21___default.a, {
          variant: "subtitle1"
        }, " ")))));
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default.a, {
        variant: "middle"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          padding: "20px" // , display: "flex", flexDirection: "row" 

        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        placeholder: "\u06A9\u062F \u062A\u062E\u0641\u06CC\u0641"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "floatLeft"
      }, "\u0627\u0639\u0645\u0627\u0644")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default.a, {
        variant: "middle"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          padding: "20px" // , display: "flex", flexDirection: "row" 

        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          display: 'inline'
        }
      }, "\u062C\u0645\u0639"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "floatLeft" // style={{float:'left'}}

      }, this.props.cartDataOrigin && this.props.cartDataOrigin.products_price), console.log("this.props.cartDataOrigin", this.props.cartDataOrigin)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          padding: "20px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          display: 'inline'
        }
      }, "\u0647\u0632\u06CC\u0646\u0647 \u0627\u0631\u0633\u0627\u0644"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "floatLeft" // style={{float:'left'}}

      }, this.props.cartDataOrigin && this.props.cartDataOrigin.delivery_price), console.log("this.props.cartDataOrigin", this.props.cartDataOrigin)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default.a, {
        variant: "middle"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          padding: "20px" // , display: "flex", flexDirection: "row" 

        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          display: 'inline'
        }
      }, " \u0645\u062C\u0645\u0648\u0639"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "floatLeft" // style={{float:'left'}}

      }, this.props.cartDataOrigin && this.props.cartDataOrigin.total_price), console.log("this.props.cartDataOrigin", this.props.cartDataOrigin)));
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.root
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default.a, null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default.a, {
        position: "fixed",
        className: classes.appBar
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_16___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
        color: "inherit",
        "aria-label": "Open drawer",
        onClick: this.handleDrawerToggle,
        className: classes.menuButton
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_15___default.a, null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_21___default.a, {
        variant: "h6",
        color: "inherit",
        noWrap: true
      }, "Responsive drawer"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        // style={{ position:'absolute', left: '-111111111px'}}
        className: classes.drawer
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7___default.a, {
        smUp: true,
        implementation: "css"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6___default.a, {
        container: this.props.container,
        variant: "temporary",
        anchor: "top",
        open: this.state.mobileOpen,
        onClose: this.handleDrawerToggle,
        classes: {
          paper: classes.drawerPaper
        }
      }, drawer)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7___default.a, {
        xsDown: true,
        implementation: "css"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6___default.a, {
        classes: {
          paper: classes.drawerPaper
        },
        variant: "permanent",
        open: true
      }, drawer))));
    }
  }]);

  return ResponsiveDrawer;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    // data: state.categoriesReducer.data
    data: state.categoriesReducer.data,
    auth: state.authReducer.token,
    slug: state.addToCreditReducer.slug,
    price: state.addToCreditReducer.total_price,
    products: state.addToCreditReducer.products,
    cartDataOrigin: state.getCartDataReducer.cartDataOrigin
  };
};

ResponsiveDrawer.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_18__["connect"])(mapStateToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17__["withStyles"])(styles, {
  withTheme: true
})(ResponsiveDrawer)));

/***/ }),

/***/ "./components/general/StepperArrow.js":
/*!********************************************!*\
  !*** ./components/general/StepperArrow.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Stepper */ "@material-ui/core/Stepper");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Step */ "@material-ui/core/Step");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_StepButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/StepButton */ "@material-ui/core/StepButton");
/* harmony import */ var _material_ui_core_StepButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_StepButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _checkout_CostumerData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../checkout/CostumerData */ "./components/checkout/CostumerData.js");
/* harmony import */ var _checkout_PaymentMethod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../checkout/PaymentMethod */ "./components/checkout/PaymentMethod.js");
/* harmony import */ var _checkout_SendingMethod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../checkout/SendingMethod */ "./components/checkout/SendingMethod.js");


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













var styles = function styles(theme) {
  return {
    root: {
      width: "90%",
      direction: 'rtl'
    },
    button: {
      marginRight: theme.spacing.unit
    },
    completed: {
      display: "inline-block"
    },
    instructions: {
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit
    },
    iconContainer: {
      transform: 'scale(2)',
      marginRight: theme.spacing.unit * 5,
      display: false
    }
  };
};

function getSteps() {
  return ["اطلاعات مشتری", "روش ارسال", "روش پرداخت"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_checkout_CostumerData__WEBPACK_IMPORTED_MODULE_8__["default"], {
        handleNext: this.handleNext
      });
    // return "Step 1: Select campaign settings...";

    case 1:
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_checkout_SendingMethod__WEBPACK_IMPORTED_MODULE_10__["default"], null);
    // return "Step 2: What is an ad group anyways?";

    case 2:
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_checkout_PaymentMethod__WEBPACK_IMPORTED_MODULE_9__["default"], null);
    // return "Step 3: This is the bit I really care about!";

    default:
      return "Unknown step";
  }
}

var StepperArrow =
/*#__PURE__*/
function (_Component) {
  _inherits(StepperArrow, _Component);

  function StepperArrow() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, StepperArrow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StepperArrow)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      activeStep: 0,
      completed: {}
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "totalSteps", function () {
      return getSteps().length;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleNext", function () {
      var activeStep;

      if (_this.isLastStep() && !_this.allStepsCompleted()) {
        // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        var steps = getSteps();
        activeStep = steps.findIndex(function (step, i) {
          return !(i in _this.state.completed);
        });
      } else {
        activeStep = _this.state.activeStep + 1;
      }

      _this.setState({
        activeStep: activeStep
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleBack", function () {
      _this.setState(function (state) {
        return {
          activeStep: state.activeStep - 1
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleStep", function (step) {
      return function () {
        _this.setState({
          activeStep: step
        });
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleComplete", function () {
      var completed = _this.state.completed;
      completed[_this.state.activeStep] = true;

      _this.setState({
        completed: completed
      });

      _this.handleNext();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleReset", function () {
      _this.setState({
        activeStep: 0,
        completed: {}
      });
    });

    return _this;
  }

  _createClass(StepperArrow, [{
    key: "getStepContent",
    value: function getStepContent(step) {
      switch (step) {
        case 0:
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_checkout_CostumerData__WEBPACK_IMPORTED_MODULE_8__["default"], {
            handleNext: this.handleNext,
            handleBack: this.handleBack
          });

        case 1:
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_checkout_SendingMethod__WEBPACK_IMPORTED_MODULE_10__["default"], {
            handleNext: this.handleNext,
            handleBack: this.handleBack
          });

        case 2:
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_checkout_PaymentMethod__WEBPACK_IMPORTED_MODULE_9__["default"], {
            handleBack: this.handleBack
          });

        default:
          return "Unknown step";
      }
    }
  }, {
    key: "completedSteps",
    value: function completedSteps() {
      return Object.keys(this.state.completed).length;
    }
  }, {
    key: "isLastStep",
    value: function isLastStep() {
      return this.state.activeStep === this.totalSteps() - 1;
    }
  }, {
    key: "allStepsCompleted",
    value: function allStepsCompleted() {
      return this.completedSteps() === this.totalSteps();
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var steps = getSteps();
      var activeStep = this.state.activeStep;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.root
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: 'flex',
          margin: '20px 0px'
        }
      }, steps.map(function (label, index) {
        return (// <Step
          //   connector={false}
          //   // key={label}
          // >
          //   <StepButton
          //   classes={{
          //     iconContainer: classes.iconContainer
          //   }}
          //     onClick={this.handleStep(index)}
          //     completed={this.state.completed[index]}
          //   >
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, console.log('label,activeStep', steps[index], activeStep, index), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'row',
              padding: '0px 0px 0px 5px'
            } // style={index === activeStep? {color:'red'}: {color: 'black'}}
            // className={label === activeStep ? 'sss': 'ddd'} 
            // {label === activeStep ? className = "dic" : className = "dic"}

          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            style: index === activeStep ? {
              color: 'blue',
              padding: '0px 0px 0px 5px'
            } : {
              color: 'black',
              padding: '0px 0px 0px 5px'
            }
          }, label), " >")) //   </StepButton>
          // </Step>

        );
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.allStepsCompleted() ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: classes.instructions
      }, "All steps completed - you're finished"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
        onClick: this.handleReset
      }, "Reset")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.getStepContent(activeStep), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
        disabled: activeStep === 0,
        onClick: this.handleBack,
        className: classes.button
      }, "Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
        variant: "contained",
        color: "primary",
        onClick: this.handleNext,
        className: classes.button
      }, "Next"), activeStep !== steps.length && (this.state.completed[this.state.activeStep] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
        variant: "caption",
        className: classes.completed
      }, "Step ", activeStep + 1, " already completed") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
        variant: "contained",
        color: "primary",
        onClick: this.handleComplete
      }, this.completedSteps() === this.totalSteps() - 1 ? "Finish" : "Complete Step"))))));
    }
  }]);

  return StepperArrow;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

StepperArrow.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(StepperArrow));

/***/ }),

/***/ "./components/general/TemporaryDrawer.js":
/*!***********************************************!*\
  !*** ./components/general/TemporaryDrawer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "@material-ui/icons/MoveToInbox");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Mail */ "@material-ui/icons/Mail");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../actions/actions */ "./actions/actions.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "@material-ui/core/ButtonBase");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _ResponsiveDrawer_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ResponsiveDrawer.css */ "./components/general/ResponsiveDrawer.css");
/* harmony import */ var _ResponsiveDrawer_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_ResponsiveDrawer_css__WEBPACK_IMPORTED_MODULE_18__);
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





















var styles = function styles(theme) {
  return {
    list: {
      width: 250
    },
    fullList: {
      width: 'auto'
    },
    root: {
      padding: '20px',
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing.unit * 2,
      margin: 'auto',
      maxWidth: 500
    },
    image: {
      width: 128,
      height: 128
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%'
    }
  };
};

var TemporaryDrawer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TemporaryDrawer, _React$Component);

  function TemporaryDrawer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TemporaryDrawer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TemporaryDrawer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      top: false,
      left: false,
      bottom: false,
      right: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleDrawer", function (side, open) {
      return function () {
        _this.setState(_defineProperty({}, side, open));
      };
    });

    return _this;
  }

  _createClass(TemporaryDrawer, [{
    key: "handleCountChange",
    value: function handleCountChange(count, slug) {
      var dispatch = this.props.dispatch;
      var formData = {
        count: count,
        product: slug
      };
      dispatch(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_13__["countChangeCartData"])(formData));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var sideList = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: '33vw'
        } // style={{width:'120%'}}

      }, this.props.cartDataOrigin && this.props.cartDataOrigin.cart_products.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: classes.root
        }, console.log("productproductproduct", product), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
          container: true,
          spacing: 16
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
          item: true
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "border imgDrawer" // className={classes.img}
          ,
          alt: "complex",
          src: product.product.thumbnail
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
          style: {
            marginTop: "15px",
            display: 'inline',
            float: 'left',
            paddingLeft: '35px'
          },
          item: true,
          xs: 12,
          sm: true,
          container: true
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
          style: {
            display: 'inline',
            float: 'left',
            padding: '5px'
          },
          item: true,
          xs: true,
          container: true,
          direction: "column",
          spacing: 16
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
          style: {
            padding: '0px'
          },
          item: true,
          xs: true
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default.a, {
          gutterBottom: true,
          variant: "subtitle1"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default.a, {
          gutterBottom: true
        }, product.product.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
          className: "inlineBlock" // style={{display:"inline-block"}}
          ,
          item: true,
          container: true
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
          className: "inlineBlock" // style={{display:"inline-block"}} 
          ,
          item: true
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default.a, {
          color: "textSecondary"
        }, product.product.price)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "floatLeft",
          style: {
            // float:'left',
            display: 'flex'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
          item: true
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          style: {
            borderRadius: "0px 10px 10px 0px",
            boxShadow: "none",
            border: 'solid grey',
            background: 'none',
            height: "22px"
          },
          onClick: function onClick() {
            return _this2.handleCountChange(product.count - 1, product.product.slug);
          }
        }, "-")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
          item: true,
          style: {
            padding: "3px 6px",
            border: "solid",
            height: "22px"
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, product.count)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
          item: true
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          style: {
            borderRadius: "10px 0px 0px 10px",
            boxShadow: "none",
            border: 'solid grey',
            background: 'none',
            height: "22px"
          },
          onClick: function onClick() {
            return _this2.handleCountChange(product.count + 1, product.product.slug);
          }
        }, "+")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
          item: true
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default.a, {
          variant: "subtitle1"
        }, " ")))));
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6___default.a, {
        variant: "middle"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: "20px" // , display: "flex", flexDirection: "row" 

        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: 'inline'
        }
      }, " \u0645\u062C\u0645\u0648\u0639"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "floatLeft" // style={{float:'left'}}

      }, this.props.cartDataOrigin && this.props.cartDataOrigin.total_price), console.log("this.props.cartDataOrigin", this.props.cartDataOrigin))) //   <div className={classes.list}>
      //     <List>
      //         {this.props.cartDataOrigin && this.props.cartDataOrigin.cart_products.map(product => (
      //             <List>
      //               {console.log('this.props.cartDataOrigin.cart_products',this.props.cartDataOrigin.cart_products)}
      //               <div className={classes.root}>
      //   <Paper className={classes.paper}>
      //               <Grid container spacing={16}>
      //       <Grid item>
      //         <ButtonBase className={classes.image}>
      //           <img className={classes.img} 
      //           // style={{width: '30%'}}
      //            alt="complex" src={product.product.thumbnail} />
      //         </ButtonBase>
      //       </Grid>
      //       <Grid item xs={12} sm container>
      //         <Grid item xs container direction="column" spacing={16}>
      //           <Grid item xs>
      //             <Typography gutterBottom variant="subtitle1">
      //               Standard license
      //             </Typography>
      //             <Typography gutterBottom>Full resolution 1920x1080 • JPEG</Typography>
      //             <Typography color="textSecondary">ID: 1030114</Typography>
      //           </Grid>
      //           <Grid item>
      //             <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
      //           </Grid>
      //         </Grid>
      //         <Grid item>
      //           <Typography variant="subtitle1">$19.00</Typography>
      //         </Grid>
      //       </Grid>
      //     </Grid>
      //     </Paper>
      // </div>
      //               <Grid  
      //     lg={12} md={12} lg md 
      //     container
      //     >
      //               <div>
      //                 <img style={{width: '30%'}} src={product.product.thumbnail}></img>
      //                 <div>{product.product.title}</div>
      //                 <div>{product.product.price}</div>
      //                 <button onClick={()=>this.handleCountChange(product.count-1, product.product.slug)}>-</button>
      //                 <div>{product.count}</div>
      //                 <button onClick={()=>this.handleCountChange(product.count+1, product.product.slug)}>+</button>
      //                 </div>
      //                 </Grid>
      //             </List>
      //         ))}
      //       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
      //           <div>ssss</div>
      //         // <ListItem button key={text}>
      //         //   <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
      //         //   <ListItemText primary={text} />
      //         //   <div>sss</div>
      //         // </ListItem>
      //       ))}
      //     </List>
      //     <Divider />
      //     <List>
      //       {['All mail', 'Trash', 'Spam'].map((text, index) => (
      //         <ListItem button key={text}>
      //           <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
      //           <ListItemText primary={text} />
      //         </ListItem>
      //       ))}
      //     </List>
      //   </div>
      ;
      var fullList = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.fullList
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5___default.a, null, ['Inbox', 'Starred', 'Send email', 'Drafts'].map(function (text, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7___default.a, {
          button: true,
          key: text
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_8___default.a, null, index % 2 === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_10___default.a, null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9___default.a, {
          primary: text
        }));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6___default.a, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5___default.a, null, ['All mail', 'Trash', 'Spam'].map(function (text, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7___default.a, {
          button: true,
          key: text
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_8___default.a, null, index % 2 === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_10___default.a, null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9___default.a, {
          primary: text
        }));
      })));
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: '40%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.toggleDrawer('right', true),
        style: {
          cursor: 'pointer',
          whiteSpace: 'nowrap'
        }
      }, "Open Left"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: {
          width: '40%'
        },
        open: this.state.left,
        onClose: this.toggleDrawer('left', false)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        tabIndex: 0,
        role: "button" // onClick={this.toggleDrawer('left', false)}
        ,
        onKeyDown: this.toggleDrawer('left', false)
      }, sideList)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3___default.a, {
        anchor: "top",
        open: this.state.top,
        onClose: this.toggleDrawer('top', false)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        tabIndex: 0,
        role: "button",
        onClick: this.toggleDrawer('top', false),
        onKeyDown: this.toggleDrawer('top', false)
      }, fullList)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3___default.a, {
        anchor: "bottom",
        open: this.state.bottom,
        onClose: this.toggleDrawer('bottom', false)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        tabIndex: 0,
        role: "button",
        onClick: this.toggleDrawer('bottom', false),
        onKeyDown: this.toggleDrawer('bottom', false)
      }, fullList)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3___default.a, {
        anchor: "right",
        open: this.state.right,
        onClose: this.toggleDrawer('right', false)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        tabIndex: 0,
        role: "button",
        onClick: this.toggleDrawer('right', false),
        onKeyDown: this.toggleDrawer('right', false)
      }, sideList)));
    }
  }]);

  return TemporaryDrawer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    // data: state.categoriesReducer.data
    data: state.categoriesReducer.data,
    auth: state.authReducer.token,
    slug: state.addToCreditReducer.slug,
    price: state.addToCreditReducer.total_price,
    products: state.addToCreditReducer.products,
    cartDataOrigin: state.getCartDataReducer.cartDataOrigin
  };
};

TemporaryDrawer.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
}; // export default withStyles(styles)(TemporaryDrawer);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(TemporaryDrawer)));

/***/ }),

/***/ "./components/handleLoading.js":
/*!*************************************!*\
  !*** ./components/handleLoading.js ***!
  \*************************************/
/*! exports provided: handleLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleLoading", function() { return handleLoading; });
function handleLoading(dispatch) {
  // const { dispatch} = this.props
  console.log('ooo');
  return dispatch({
    type: 'HANDLE_LOADING',
    action: 'sss'
  }); // return (console.log('ooo'))
}

/***/ }),

/***/ "./components/headerStyle.css":
/*!************************************!*\
  !*** ./components/headerStyle.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/login/loginDialog.js":
/*!*****************************************!*\
  !*** ./components/login/loginDialog.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "@material-ui/core/DialogContentText");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../actions/actions */ "./actions/actions.js");
/* harmony import */ var _CreateForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../CreateForm */ "./components/CreateForm.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











 // export default class LoginDialog extends React.Component {

var LoginDialog =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoginDialog, _React$Component);

  function LoginDialog() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LoginDialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LoginDialog)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      open: false,
      Username: "",
      Password: ""
    });

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClickOpen", function () {
      _this.setState({
        open: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClose", function () {
      _this.setState({
        open: false
      });
    });

    return _this;
  }

  _createClass(LoginDialog, [{
    key: "dispatchLogIn",
    value: function () {
      var _dispatchLogIn = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this$props, dispatch, onlocalStorageUpdate, values, response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, dispatch = _this$props.dispatch, onlocalStorageUpdate = _this$props.onlocalStorageUpdate;
                values = {
                  username: this.state.Username,
                  password: this.state.Password
                };
                _context.next = 4;
                return dispatch(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_10__["fetchlogInReqIfneeded"])(Object(_CreateForm__WEBPACK_IMPORTED_MODULE_11__["createFormData"])(values)));

              case 4:
                response = _context.sent;
                // handleClose()
                console.log('responseresponseresponse', response);
                onlocalStorageUpdate();

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function dispatchLogIn() {
        return _dispatchLogIn.apply(this, arguments);
      }

      return dispatchLogIn;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        style: {
          paddingRight: '20vw'
        },
        onClick: this.handleClickOpen
      }, this.props.text)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4___default.a, {
        open: this.state.open,
        onClose: this.handleClose,
        "aria-labelledby": "form-dialog-title"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "form-dialog-title"
      }, "\u0648\u0631\u0648\u062F \u0628\u0647 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        placeholder: "Username",
        ref: function ref(input) {
          return _this2.user = input;
        },
        onChange: this.handleUsernameChange,
        style: {
          width: "60%",
          margin: "10px",
          height: "50px",
          borderRadius: "10px"
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        placeholder: "Password",
        type: "password",
        ref: function ref(input) {
          return _this2.pass = input;
        },
        onChange: this.handlePasswordChange,
        style: {
          width: "60%",
          margin: "10px",
          height: "50px",
          borderRadius: "10px"
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onClick: this.handleClose,
        color: "primary"
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: function onClick() {
          _this2.dispatchLogIn();

          _this2.handleClose();
        },
        style: {
          position: "inherit",
          right: "75%"
        }
      }, "\u0648\u0631\u0648\u062F \u0628\u0647 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC"))));
    }
  }]);

  return LoginDialog;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps)(LoginDialog));

/***/ }),

/***/ "./components/post/ImagesSlinck.js":
/*!*****************************************!*\
  !*** ./components/post/ImagesSlinck.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var _node_modules_slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var _node_modules_slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // import './slick.scss'
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";




var ImagesSlinck =
/*#__PURE__*/
function (_Component) {
  _inherits(ImagesSlinck, _Component);

  function ImagesSlinck() {
    _classCallCheck(this, ImagesSlinck);

    return _possibleConstructorReturn(this, _getPrototypeOf(ImagesSlinck).apply(this, arguments));
  }

  _createClass(ImagesSlinck, [{
    key: "render",
    value: function render() {
      var settings = {
        arrows: true,
        //   dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, " Single Item"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, settings, this.props.images.map(function (image) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          width: "100px",
          height: "100px",
          src: image.image,
          alt: image.slug
        }));
      })));
    }
  }]);

  return ImagesSlinck;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ImagesSlinck);

/***/ }),

/***/ "./components/post/SingleProduct.js":
/*!******************************************!*\
  !*** ./components/post/SingleProduct.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SingleProductData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleProductData */ "./components/post/SingleProductData.js");
/* harmony import */ var _SingleProductImagesSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleProductImagesSection */ "./components/post/SingleProductImagesSection.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "@material-ui/core/ButtonBase");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _SingleProductTabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SingleProductTabs */ "./components/post/SingleProductTabs.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing.unit * 2,
      margin: "auto",
      maxWidth: 500
    },
    image: {
      width: 128,
      height: 128
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%"
    }
  };
};

var SingleProduct =
/*#__PURE__*/
function (_Component) {
  _inherits(SingleProduct, _Component);

  function SingleProduct() {
    _classCallCheck(this, SingleProduct);

    return _possibleConstructorReturn(this, _getPrototypeOf(SingleProduct).apply(this, arguments));
  }

  _createClass(SingleProduct, [{
    key: "render",
    value: function render() {
      // const { classes } = this.props;
      var _this$props = this.props,
          classes = _this$props.classes,
          product = _this$props.product;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.root
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        lg: 3,
        md: 3,
        spacing: 16
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SingleProductImagesSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
        mainImage: product.thumbnail,
        product: product
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        lg: 7,
        md: 7,
        spacing: 3 // style={{direction:'rtl', marginRight: '10px'}}

      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SingleProductData__WEBPACK_IMPORTED_MODULE_1__["default"], {
        product: product
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SingleProductTabs__WEBPACK_IMPORTED_MODULE_9__["default"], {
        product: product
      })));
    }
  }]);

  return SingleProduct;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // export default SingleProduct


SingleProduct.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles)(SingleProduct));

/***/ }),

/***/ "./components/post/SingleProductData.js":
/*!**********************************************!*\
  !*** ./components/post/SingleProductData.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "@material-ui/core/ButtonBase");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/actions */ "./actions/actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing.unit * 2,
      margin: "auto",
      maxWidth: 500
    },
    image: {
      width: 128,
      height: 128
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%"
    }
  };
};

var SingleProductData =
/*#__PURE__*/
function (_Component) {
  _inherits(SingleProductData, _Component);

  function SingleProductData() {
    _classCallCheck(this, SingleProductData);

    return _possibleConstructorReturn(this, _getPrototypeOf(SingleProductData).apply(this, arguments));
  }

  _createClass(SingleProductData, [{
    key: "addToBasket",
    value: function addToBasket(slug) {
      var dispatch = this.props.dispatch;
      dispatch(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_7__["fetchAddToCredit"])(slug));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this,
          _React$createElement;

      var _this$props = this.props,
          classes = _this$props.classes,
          product = _this$props.product;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          direction: 'rtl',
          marginRight: '30px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, (_React$createElement = {
        lg: 12,
        md: 12
      }, _defineProperty(_React$createElement, "lg", true), _defineProperty(_React$createElement, "md", true), _defineProperty(_React$createElement, "container", true), _React$createElement), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        lg: true,
        md: true,
        container: true,
        direction: "column",
        spacing: 16
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        lg: true,
        md: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
        gutterBottom: true,
        variant: "subtitle1"
      }, product.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
        gutterBottom: true
      }, "Full resolution 1920x1080 \u2022 JPEG"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
        color: "textSecondary"
      }, "ID: 1030114")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
        gutterBottom: true
      }, product.price, " \u062A\u0648\u0645\u0627\u0646")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this.addToBasket(product.slug);
        }
      }, "\u0627\u0641\u0632\u0648\u062F\u0646 \u0628\u0647 \u0633\u0628\u062F \u062E\u0631\u06CC\u062F")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
        gutterBottom: true
      }, product.short_description))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
        variant: "subtitle1"
      }, "$19.00"))));
    }
  }]);

  return SingleProductData;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    orderData: state.userDataReducer.orderData
  };
};

SingleProductData = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps)(SingleProductData); // export default SingleProductData

SingleProductData.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(SingleProductData));

/***/ }),

/***/ "./components/post/SingleProductImagesSection.js":
/*!*******************************************************!*\
  !*** ./components/post/SingleProductImagesSection.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "@material-ui/core/ButtonBase");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/GridList */ "@material-ui/core/GridList");
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/GridListTile */ "@material-ui/core/GridListTile");
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/GridListTileBar */ "@material-ui/core/GridListTileBar");
/* harmony import */ var _material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/StarBorder */ "@material-ui/icons/StarBorder");
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ImagesSlinck__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ImagesSlinck */ "./components/post/ImagesSlinck.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _node_modules_slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../node_modules/slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var _node_modules_slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_node_modules_slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _node_modules_slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../node_modules/slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var _node_modules_slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_node_modules_slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_15__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












 // import tileData from './tileData';






var styles = function styles(theme) {
  return {
    root2: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      flexWrap: "nowrap",
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)"
    },
    title: {
      color: theme.palette.primary.light
    },
    titleBar: {
      background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
    },
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing.unit * 2,
      margin: "auto",
      maxWidth: 500
    },
    image: {// width: 128,
      // height: 128
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%"
    }
  };
};

var SingleProductImagesSection =
/*#__PURE__*/
function (_Component) {
  _inherits(SingleProductImagesSection, _Component);

  function SingleProductImagesSection() {
    var _this;

    _classCallCheck(this, SingleProductImagesSection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SingleProductImagesSection).call(this));
    _this.state = {
      image: null
    };
    return _this;
  }

  _createClass(SingleProductImagesSection, [{
    key: "render",
    value: function render() {
      var _React$createElement,
          _this2 = this;

      var settings = {
        arrows: true,
        //   dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      var _this$props = this.props,
          classes = _this$props.classes,
          mainImage = _this$props.mainImage,
          product = _this$props.product;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, (_React$createElement = {
        item: true,
        lg: 12,
        md: 12
      }, _defineProperty(_React$createElement, "lg", true), _defineProperty(_React$createElement, "md", true), _defineProperty(_React$createElement, "container", true), _React$createElement), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: classes.image
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: classes.img,
        alt: "complex",
        src: this.state.image ? this.state.image : mainImage
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, " Single Item"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_13___default.a, settings, product.images.map(function (image) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          width: "100px",
          height: "100px",
          src: image.image,
          alt: image.slug,
          onClick: function onClick() {
            return _this2.setState({
              image: image.image
            });
          }
        }));
      }))));
    }
  }]);

  return SingleProductImagesSection;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // export default SingleProductImagesSection;


SingleProductImagesSection.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(SingleProductImagesSection));

/***/ }),

/***/ "./components/post/SingleProductTabs.js":
/*!**********************************************!*\
  !*** ./components/post/SingleProductTabs.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tabs */ "@material-ui/core/Tabs");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tab */ "@material-ui/core/Tab");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _TableData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TableData */ "./components/post/TableData.js");


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










function TabContainer(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    component: "div",
    style: {
      padding: 8 * 3
    }
  }, props.children);
}

TabContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1 // backgroundColor: theme.palette.background.paper,

    }
  };
};

var SingleProductTabs =
/*#__PURE__*/
function (_Component) {
  _inherits(SingleProductTabs, _Component);

  function SingleProductTabs() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SingleProductTabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SingleProductTabs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      value: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (event, value) {
      _this.setState({
        value: value
      });
    });

    return _this;
  }

  _createClass(SingleProductTabs, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          product = _this$props.product;
      var value = this.state.value;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.root
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default.a, {
        position: "static",
        style: {
          boxShadow: 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4___default.a, {
        value: value,
        onChange: this.handleChange,
        style: {
          background: 'white',
          color: 'black',
          boxShadow: 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5___default.a, {
        label: "\u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u062D\u0635\u0648\u0644"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5___default.a, {
        label: "\u0645\u0634\u062E\u0635\u0627\u062A \u0641\u0646\u06CC"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5___default.a, {
        label: "\u0627\u0645\u062A\u06CC\u0627\u0632\u062F\u0647\u06CC \u0648 \u0646\u0638\u0631\u0627\u062A"
      }))), value === 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabContainer, null, "Item One"), value === 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableData__WEBPACK_IMPORTED_MODULE_7__["default"], {
        product: product
      })), value === 2 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabContainer, null, "Item Three"));
    }
  }]);

  return SingleProductTabs;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

SingleProductTabs.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(SingleProductTabs));

/***/ }),

/***/ "./components/post/TableData.js":
/*!**************************************!*\
  !*** ./components/post/TableData.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Table */ "@material-ui/core/Table");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableHead */ "@material-ui/core/TableHead");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableBody */ "@material-ui/core/TableBody");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var CustomTableCell = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(function (theme) {
  return {
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    body: {
      fontSize: 14
    }
  };
})(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4___default.a);

var styles = function styles(theme) {
  return {
    root: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto"
    },
    table: {
      minWidth: 700
    },
    row: {
      "&:nth-of-type(odd)": {
        //   backgroundColor: theme.palette.background.default
        backgroundColor: 'gray'
      }
    }
  };
};

var TableData =
/*#__PURE__*/
function (_Component) {
  _inherits(TableData, _Component);

  function TableData() {
    _classCallCheck(this, TableData);

    return _possibleConstructorReturn(this, _getPrototypeOf(TableData).apply(this, arguments));
  }

  _createClass(TableData, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          product = _this$props.product;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: classes.table
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8___default.a, null, product.data.map(function (el) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6___default.a, {
          className: classes.row //  key={row.id}

        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomTableCell, {
          style: {
            width: '50px',
            borderLeft: 'solid black'
          },
          component: "th",
          scope: "row"
        }, el.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomTableCell, {
          style: {
            textAlign: 'right'
          },
          component: "th",
          scope: "row"
        }, el.value));
      }))));
    }
  }]);

  return TableData;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // export default TableData;


TableData.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(TableData));

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/checkout.js":
/*!***************************!*\
  !*** ./pages/checkout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_general_StepperArrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/general/StepperArrow */ "./components/general/StepperArrow.js");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actions */ "./actions/actions.js");
/* harmony import */ var _api_createConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/createConfig */ "./api/createConfig.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_defaultStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/defaultStore */ "./store/defaultStore.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_general_ResponsiveDrawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/general/ResponsiveDrawer */ "./components/general/ResponsiveDrawer.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var Checkout =
/*#__PURE__*/
function (_Component) {
  _inherits(Checkout, _Component);

  function Checkout() {
    _classCallCheck(this, Checkout);

    return _possibleConstructorReturn(this, _getPrototypeOf(Checkout).apply(this, arguments));
  }

  _createClass(Checkout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;
      dispatch(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_2__["fetchUserDataIfNeeded"])());
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: '70px 50px',
          width: '60vw'
        }
      }, console.log('this.props.userData', this.props.user), Object.keys(this.props.user).length // this.props.user.length
      ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_general_StepperArrow__WEBPACK_IMPORTED_MODULE_1__["default"], null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "11111"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_general_ResponsiveDrawer__WEBPACK_IMPORTED_MODULE_7__["default"], null));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var reduxStore = _ref.reduxStore;
      reduxStore.dispatch(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_2__["fetchUserDataIfNeeded"])());
      return {};
    }
  }]);

  return Checkout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // Checkout.getInitialProps = async function({ reduxStore, context }) {
//     reduxStore.dispatch(fetchUserDataIfNeeded())
//   };


var mapStateToProps = function mapStateToProps(state) {
  console.log('state in map', state);
  return {
    user: state.userDataReducer.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(Checkout));

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/actions */ "./actions/actions.js");
/* harmony import */ var _components_post_SingleProduct__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/post/SingleProduct */ "./components/post/SingleProduct.js");



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










var Post = function Post(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "hil"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_post_SingleProduct__WEBPACK_IMPORTED_MODULE_9__["default"], {
    product: props.show.data.product
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: _components_addToBasket__WEBPACK_IMPORTED_MODULE_6__["default"]
  }, "add to basket"), console.log(props.show));
};

Post.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var address, gamma, res, show;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            address = context.query.address;
            console.log('address', address);
            gamma = Object(_api_createConfig__WEBPACK_IMPORTED_MODULE_2__["default"])();
            console.log('gammagamma', gamma);
            _context.next = 6;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("http://api.projectant.aasoo.ir/shelves/product/address/".concat(encodeURIComponent(address), "/"), // `http://api.projectant.aasoo.ir/shelves/product/${address}/`,
            Object(_api_createConfig__WEBPACK_IMPORTED_MODULE_2__["default"])());

          case 6:
            res = _context.sent;
            console.log('res', res);
            _context.next = 10;
            return res.json();

          case 10:
            show = _context.sent;
            console.log('show', show);
            return _context.abrupt("return", {
              show: show
            });

          case 13:
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

/***/ "./reducer/getCartDataReducer.js":
/*!***************************************!*\
  !*** ./reducer/getCartDataReducer.js ***!
  \***************************************/
/*! exports provided: getCartDataReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCartDataReducer", function() { return getCartDataReducer; });
/* harmony import */ var _store_defaultStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/defaultStore */ "./store/defaultStore.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var getCartDataReducer = function getCartDataReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _store_defaultStore__WEBPACK_IMPORTED_MODULE_0__["default"];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === "GET_CART_DATA") {
    console.log('action.product', action);
    return _objectSpread({}, state, {
      cartDataOrigin: action.data
    });
  } else return state;
};

/***/ }),

/***/ "./reducer/handleLoadingReducer.js":
/*!*****************************************!*\
  !*** ./reducer/handleLoadingReducer.js ***!
  \*****************************************/
/*! exports provided: handleLoadingReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleLoadingReducer", function() { return handleLoadingReducer; });
/* harmony import */ var _store_defaultStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/defaultStore */ "./store/defaultStore.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var handleLoadingReducer = function handleLoadingReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _store_defaultStore__WEBPACK_IMPORTED_MODULE_0__["default"];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === "HANDLE_LOADING") {
    console.log('action.product', !state.loading);
    return _objectSpread({}, state, {
      loading: !state.loading
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
/* harmony import */ var _setFilterReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./setFilterReducer */ "./reducer/setFilterReducer.js");
/* harmony import */ var _userDataReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./userDataReducer */ "./reducer/userDataReducer.js");
/* harmony import */ var _getCartDataReducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getCartDataReducer */ "./reducer/getCartDataReducer.js");
/* harmony import */ var _handleLoadingReducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./handleLoadingReducer */ "./reducer/handleLoadingReducer.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_12__);














var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  categoriesReducer: _reducer__WEBPACK_IMPORTED_MODULE_4__["categoriesReducer"],
  authReducer: _authReducer__WEBPACK_IMPORTED_MODULE_5__["authReducer"],
  addToCreditReducer: _addToCreditReducer__WEBPACK_IMPORTED_MODULE_6__["addToCreditReducer"],
  setFilterReducer: _setFilterReducer__WEBPACK_IMPORTED_MODULE_8__["setFilterReducer"],
  userDataReducer: _userDataReducer__WEBPACK_IMPORTED_MODULE_9__["userDataReducer"],
  getCartDataReducer: _getCartDataReducer__WEBPACK_IMPORTED_MODULE_10__["getCartDataReducer"],
  handleLoadingReducer: _handleLoadingReducer__WEBPACK_IMPORTED_MODULE_11__["handleLoadingReducer"],
  form: redux_form__WEBPACK_IMPORTED_MODULE_12__["reducer"]
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

/***/ "./reducer/setFilterReducer.js":
/*!*************************************!*\
  !*** ./reducer/setFilterReducer.js ***!
  \*************************************/
/*! exports provided: setFilterReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFilterReducer", function() { return setFilterReducer; });
/* harmony import */ var _store_defaultStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/defaultStore */ "./store/defaultStore.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var setFilterReducer = function setFilterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _store_defaultStore__WEBPACK_IMPORTED_MODULE_0__["default"];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === "ADD_FILTER") {
    return _objectSpread({}, state, {
      data: [].concat(_toConsumableArray(state.data), [{
        slug: action.slug,
        choice_slug: action.choice_slug
      }]) // action.data

    });
  } else return state;
};

/***/ }),

/***/ "./reducer/userDataReducer.js":
/*!************************************!*\
  !*** ./reducer/userDataReducer.js ***!
  \************************************/
/*! exports provided: userDataReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userDataReducer", function() { return userDataReducer; });
/* harmony import */ var _store_defaultStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/defaultStore */ "./store/defaultStore.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var userDataReducer = function userDataReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _store_defaultStore__WEBPACK_IMPORTED_MODULE_0__["default"];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === "GET_USER_DATA") {
    console.log('action.userData', action.userData);
    console.log('state console', state.user);
    console.log('state console', state.address);
    return _objectSpread({}, state, {
      user: action.userData,
      cartData: action.cartData,
      address: action.address
    });
  }

  if (action.type === "CREATE_ORDER") {
    return _objectSpread({}, state, {
      orderData: action.orderData
    });
  } else return state;
};

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
  products: {},
  user: {},
  cartData: {},
  orderData: {},
  cartDataOrigin: '',
  loading: false
});

/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/checkout.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/checkout.js */"./pages/checkout.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Badge":
/*!******************************************!*\
  !*** external "@material-ui/core/Badge" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/ButtonBase":
/*!***********************************************!*\
  !*** external "@material-ui/core/ButtonBase" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ButtonBase");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/DialogContentText":
/*!******************************************************!*\
  !*** external "@material-ui/core/DialogContentText" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

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

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/InputBase":
/*!**********************************************!*\
  !*** external "@material-ui/core/InputBase" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputBase");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Step":
/*!*****************************************!*\
  !*** external "@material-ui/core/Step" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Step");

/***/ }),

/***/ "@material-ui/core/StepButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/StepButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/StepButton");

/***/ }),

/***/ "@material-ui/core/Stepper":
/*!********************************************!*\
  !*** external "@material-ui/core/Stepper" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Stepper");

/***/ }),

/***/ "@material-ui/core/Tab":
/*!****************************************!*\
  !*** external "@material-ui/core/Tab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "@material-ui/core/Table":
/*!******************************************!*\
  !*** external "@material-ui/core/Table" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "@material-ui/core/TableBody":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableBody" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "@material-ui/core/TableCell":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableCell" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),

/***/ "@material-ui/core/TableHead":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableHead" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ "@material-ui/core/TableRow":
/*!*********************************************!*\
  !*** external "@material-ui/core/TableRow" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ "@material-ui/core/Tabs":
/*!*****************************************!*\
  !*** external "@material-ui/core/Tabs" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/styles/colorManipulator":
/*!************************************************************!*\
  !*** external "@material-ui/core/styles/colorManipulator" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),

/***/ "@material-ui/icons/AccountCircle":
/*!***************************************************!*\
  !*** external "@material-ui/icons/AccountCircle" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "@material-ui/icons/Mail":
/*!******************************************!*\
  !*** external "@material-ui/icons/Mail" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/MoreVert":
/*!**********************************************!*\
  !*** external "@material-ui/icons/MoreVert" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreVert");

/***/ }),

/***/ "@material-ui/icons/MoveToInbox":
/*!*************************************************!*\
  !*** external "@material-ui/icons/MoveToInbox" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoveToInbox");

/***/ }),

/***/ "@material-ui/icons/Notifications":
/*!***************************************************!*\
  !*** external "@material-ui/icons/Notifications" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Notifications");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

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

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

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

/***/ "redux-form":
/*!*****************************!*\
  !*** external "redux-form" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-form");

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
//# sourceMappingURL=checkout.js.map