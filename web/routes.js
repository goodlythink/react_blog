import App from './App/App'
// import Home from './Home/Home'
// import About from './About/About'

function loadRoute(cb) {
    return (module) => {
        cb(null, module.default)
    }
}
const routes = {
    path: '/',
    component: App,
    indexRoute: {
        // component: Home,
        getComponent(nextState, cb) {
            import('./Home/Home.js').then(loadRoute(cb))
        }
    },
    childRoutes: [
        {
            path: 'about',
            // component: About,
            getComponent(nextState, cb) {
                import('./About/About.js').then(loadRoute(cb))
            }
        },
    ]
}

export default routes