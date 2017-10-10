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

/***/ "28Ef":
/***/ (function(module, exports) {

module.exports = require("redux-promise-middleware");

/***/ }),

/***/ "5CwF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("Jmof");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


class Post extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    render() {
        const { data } = this.props;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h3',
                null,
                data.title
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                data.body
            )
        );
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Post);

/***/ }),

/***/ "5Eq3":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "5X7K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("Jmof");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("H/qB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Posts_PostList__ = __webpack_require__("AT6d");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__("nSrI");





class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    componentDidMount() {
        this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions__["a" /* loadPosts */])());
    }
    render() {
        const { posts } = this.props;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h1',
                null,
                'Lastest Posts'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Posts_PostList__["a" /* default */], { data: posts.data })
        );
    }
}

function selector(state) {
    return {
        posts: state.posts
    };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(selector)(Home));

/***/ }),

/***/ "AT6d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("Jmof");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Post__ = __webpack_require__("5CwF");



class PostList extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    render() {
        const { data } = this.props;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            data && data.map(e => {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Post__["a" /* default */], { data: e, key: `post_${e.id}` });
            })
        );
    }
}

/* harmony default export */ __webpack_exports__["a"] = (PostList);

/***/ }),

/***/ "EOxJ":
/***/ (function(module, exports) {

module.exports = {
	"container": "_34Xu4QXr",
	"content": "aiwSyjcM"
};

/***/ }),

/***/ "H/qB":
/***/ (function(module, exports) {

module.exports = require("react-redux");

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

/***/ "SHgP":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "UdY5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("dJD+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);

// (state, action) => state
function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

function posts(state = {}, action) {
    switch (action.type) {
        case 'LOAD_POSTS_PENDING':
            return {
                isRejected: false,
                data: null
            };
        case 'LOAD_POSTS_FULFILLED':
            return {
                isRejected: false,
                data: action.payload
            };
        case 'LOAD_POSTS_REJECT':
            return {
                isRejected: true,
                data: 'There is Error'
            };
        default:
            return state;
    }
}

const reducers = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    counter,
    posts
});

/* harmony default export */ __webpack_exports__["a"] = (reducers);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("H/qB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__web_configureStore__ = __webpack_require__("Zo1f");







function matchRoute(req) {
    const store = Object(__WEBPACK_IMPORTED_MODULE_5__web_configureStore__["a" /* default */])();

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
                const element = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4_react_redux__["Provider"],
                    { store: store },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["RouterContext"], renderProps)
                );
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

/***/ "Zo1f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("dJD+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_promise_middleware__ = __webpack_require__("28Ef");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_promise_middleware___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_promise_middleware__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_js__ = __webpack_require__("UdY5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_thunk__ = __webpack_require__("SHgP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_thunk__);





const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || __WEBPACK_IMPORTED_MODULE_0_redux__["compose"];

function configureStore() {
    const store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__reducers_js__["a" /* default */], composeEnhancers(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_3_redux_thunk___default.a, __WEBPACK_IMPORTED_MODULE_1_redux_promise_middleware___default()())));
    return store;
}

/***/ }),

/***/ "bhYp":
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),

/***/ "dJD+":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "jAJp":
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "nSrI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadPosts;
function loadPosts() {
    return (dispatch, getState) => {
        const { posts } = getState();
        if (posts.data != null) {
            return;
        }
        return dispatch(fetchPosts());
    };
}

function fetchPosts() {
    return {
        type: 'LOAD_POSTS',
        payload: fetch('http://jsonplaceholder.typicode.com/posts?userId=1').then(d => d.json())
    };
}

/***/ }),

/***/ "rxpj":
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "tUxE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_App__ = __webpack_require__("VS33");

// import Home from './Home/Home'
// import About from './About/About'

function loadRoute(cb) {
    return module => {
        cb(null, module.default);
    };
}
const routes = {
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_0__App_App__["a" /* default */],
    indexRoute: {
        // component: Home,
        getComponent(nextState, cb) {
            new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "5X7K")).then(loadRoute(cb));
        }
    },
    childRoutes: [{
        path: 'about',
        // component: About,
        getComponent(nextState, cb) {
            new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "wVNj")).then(loadRoute(cb));
        }
    }]
};

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),

/***/ "wVNj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("Jmof");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("H/qB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);



class About extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this._handleClick = () => {
            this.props.handleClick();
        }, _temp;
    }

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
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { onClick: this._handleClick },
                    'Click ',
                    this.props.count
                )
            )
        );
    }

}
function selector(state) {
    return {
        count: state.counter
    };
}

function mapDispatch(dispatch) {
    return {
        handleClick: () => {
            dispatch({ type: 'INCREMENT' });
        }
    };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(selector, mapDispatch)(About));

/***/ })

/******/ });