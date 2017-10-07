module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/ifb":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("5Eq3");

Object.assign = __webpack_require__("bhYp");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("/ifb");
module.exports = __webpack_require__("Vejm");


/***/ }),

/***/ "5Eq3":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "5X7K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("Jmof");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h1',
                null,
                'Lastest Posts'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    null,
                    'Post 1'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    null,
                    'Post 2'
                )
            )
        );
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),

/***/ "EOxJ":
/***/ (function(module, exports) {

module.exports = {
	"container": "_34Xu4QXr",
	"content": "aiwSyjcM"
};

/***/ }),

/***/ "I9x9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("Jmof");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header_module_scss__ = __webpack_require__("YbOP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header_module_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Header_module_scss__);



class Header extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__Header_module_scss___default.a.container },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_1__Header_module_scss___default.a.pugHeading },
                'Pug Club Blog'
            )
        );
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "Jmof":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "VS33":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("Jmof");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Header_Header__ = __webpack_require__("I9x9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App_module_scss__ = __webpack_require__("EOxJ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App_module_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App_module_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__("rxpj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router__);





class App extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2__App_module_scss___default.a.container },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_Header_Header__["a" /* default */], null),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3_react_router__["Link"],
                        { to: '/' },
                        'Home'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3_react_router__["Link"],
                        { to: '/about' },
                        'About'
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_2__App_module_scss___default.a.content },
                this.props.children
            )
        );
    }
}

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "Vejm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("Jmof");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server__ = __webpack_require__("jAJp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__("rxpj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__web_routes__ = __webpack_require__("tUxE");





function matchRoute(req) {
    return new Promise((resolve, reject) => {
        Object(__WEBPACK_IMPORTED_MODULE_2_react_router__["match"])({ routes: __WEBPACK_IMPORTED_MODULE_3__web_routes__["a" /* default */], location: req.url }, (error, redirectLocation, renderProps) => {
            if (error) {
                resolve({ error });
            } else if (redirectLocation) {
                resolve({
                    redirect: {
                        url: redirectLocation.pathname + redirectLocation.search
                    }
                });
            } else if (renderProps) {
                const element = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["RouterContext"], renderProps);
                const content = __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default.a.renderToString(element);
                resolve({ content });
            } else {
                cosole.warn('error SSR');
            }
        });
    });
}

/* harmony default export */ __webpack_exports__["default"] = (matchRoute);

/***/ }),

/***/ "YbOP":
/***/ (function(module, exports) {

module.exports = {
	"container": "_3pRVbprT",
	"pugHeading": "_1l68HmfE"
};

/***/ }),

/***/ "bhYp":
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),

/***/ "jAJp":
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "rxpj":
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "tUxE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_App__ = __webpack_require__("VS33");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home_Home__ = __webpack_require__("5X7K");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__About_About__ = __webpack_require__("wVNj");




const routes = {
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_0__App_App__["a" /* default */],
    indexRoute: { component: __WEBPACK_IMPORTED_MODULE_1__Home_Home__["a" /* default */] },
    childRoutes: [{ path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__About_About__["a" /* default */] }]
};

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),

/***/ "wVNj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("Jmof");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


class About extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h1',
                null,
                'About'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    null,
                    'We are pug lover community. All things pugs'
                )
            )
        );
    }
}

/* harmony default export */ __webpack_exports__["a"] = (About);

/***/ })

/******/ });