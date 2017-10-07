import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { match, RouteContext } from 'react-route'
import routes from '../web/routes'

function matchRoute(req) {
    return new Promise((resolve, reject) => {
        match(
            {routes, location: req.url},
            (error, redirectLocation, renderProps) => {
                if (error) {
                    resolve({error})
                } else if(redirectLocation){
                    resolve({
                        redirect: {
                            url: redirectLocation.pathname + redirectLocation.search
                        }
                    })
                } else if (renderProps){
                    const element = <RouteContext {...renderProps} />
                    const content = ReactDOMServer.renderToString(element)
                    resolve({content})
                } else {
                    cosole.warn('error SSR')
                }
            }
        )
    })
}

export default matchRoute