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
                data.description
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("kOoz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("Jmof");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("q2Xd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Posts_PostList__ = __webpack_require__("AT6d");





class Home extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
    render() {
        const { viewer, error, loading, loadMorePosts } = this.props;

        if (error) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                null,
                'Error!!'
            );
        }

        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'h1',
                null,
                'Lastest Posts'
            ),
            loading && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                null,
                'Loading...'
            ),
            viewer && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Posts_PostList__["a" /* default */], { data: viewer.posts }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'button',
                { onClick: loadMorePosts },
                'Load More'
            )
        );
    }
}

const QUERY = __WEBPACK_IMPORTED_MODULE_2_react_apollo__["gql"]`
query AAA($offset: Int, $limit: Int) {
    viewer{
      name
      posts(offset:$offset, limit: $limit){
        id
        title
        description
      }
    }
  }
`;
const Container = Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(QUERY, {
    options(props) {
        return {
            variables: {
                offset: 0,
                limit: 10
            }
        };
    },
    props({ data: { loading, error, viewer, fetchMore } }) {
        return {
            loading,
            error,
            viewer,
            loadMorePosts() {
                return fetchMore({
                    variables: {
                        offset: viewer.posts.length
                    },
                    updateQuery: (previousResult, { fetchMoreResult }) => {
                        if (!fetchMoreResult) return previousResult;
                        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, previousResult, {
                            viewer: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, previousResult.viewer, {
                                posts: [...previousResult.viewer.posts, ...fetchMoreResult.viewer.posts]
                            })
                        });
                    }
                });
            }
        };
    }
})(Home);
/* harmony default export */ __webpack_exports__["default"] = (Container);

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
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["counter"] = counter;
/* harmony export (immutable) */ __webpack_exports__["posts"] = posts;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("ZrOi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("Jmof");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__("jAJp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__("rxpj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__web_routes__ = __webpack_require__("tUxE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__("H/qB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__web_configureStore__ = __webpack_require__("Zo1f");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_apollo__ = __webpack_require__("q2Xd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_apollo__);









function matchRoute(req) {
    const client = new __WEBPACK_IMPORTED_MODULE_7_react_apollo__["ApolloClient"]({
        networkInterface: Object(__WEBPACK_IMPORTED_MODULE_7_react_apollo__["createNetworkInterface"])({
            uri: 'http://localhost:8000/api/graphql'
        }),
        ssrMode: true
    });
    const store = Object(__WEBPACK_IMPORTED_MODULE_6__web_configureStore__["a" /* default */])({ client });
    return new Promise((resolve, reject) => {
        Object(__WEBPACK_IMPORTED_MODULE_3_react_router__["match"])({ routes: __WEBPACK_IMPORTED_MODULE_4__web_routes__["a" /* default */], location: req.url }, (() => {
            var _ref = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_asyncToGenerator___default()(function* (error, redirectLocation, renderProps) {
                if (error) {
                    resolve({ error });
                } else if (redirectLocation) {
                    resolve({
                        redirect: {
                            url: redirectLocation.pathname + redirectLocation.search
                        }
                    });
                } else if (renderProps) {
                    const prefetches = renderProps.components.filter(function (c) {
                        return c.fetchData;
                    }).map(function (c) {
                        return c.fetchData(store);
                    });
                    yield Promise.all(prefetches);
                    const element = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7_react_apollo__["ApolloProvider"],
                        { client: client, store: store },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router__["RouterContext"], renderProps)
                    );

                    yield Object(__WEBPACK_IMPORTED_MODULE_7_react_apollo__["getDataFromTree"])(element);
                    const content = __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default.a.renderToString(element);
                    resolve({
                        content,
                        data: store.getState()
                    });
                } else {
                    cosole.warn('error SSR');
                }
            });

            return function (_x, _x2, _x3) {
                return _ref.apply(this, arguments);
            };
        })());
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("kOoz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__("dJD+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_promise_middleware__ = __webpack_require__("28Ef");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_promise_middleware___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_promise_middleware__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_js__ = __webpack_require__("UdY5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_thunk__ = __webpack_require__("SHgP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_thunk__);






const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || __WEBPACK_IMPORTED_MODULE_1_redux__["compose"];

function configureStore({ preloadState, client } = {}) {
    const store = Object(__WEBPACK_IMPORTED_MODULE_1_redux__["createStore"])(Object(__WEBPACK_IMPORTED_MODULE_1_redux__["combineReducers"])(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_3__reducers_js__, {
        apollo: client.reducer()
    })), preloadState, composeEnhancers(Object(__WEBPACK_IMPORTED_MODULE_1_redux__["applyMiddleware"])(client.middleware(), __WEBPACK_IMPORTED_MODULE_4_redux_thunk___default.a, __WEBPACK_IMPORTED_MODULE_2_redux_promise_middleware___default()())));
    return store;
}

/***/ }),

/***/ "ZrOi":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

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

/***/ "kOoz":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),

/***/ "q2Xd":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

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