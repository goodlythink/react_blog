import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from '../web/routes'
import { Provider } from 'react-redux'
import configureStore from '../web/configureStore'
import { ApolloClient, ApolloProvider, createNetworkInterface, getDataFromTree } from 'react-apollo'

function matchRoute(req) {
    const client = new ApolloClient({
        networkInterface: createNetworkInterface({
            uri: 'http://localhost:8000/api/graphql',
        }),
        ssrMode: true,
    })
    const store = configureStore({ client });
    return new Promise((resolve, reject) => {
        match(
            { routes, location: req.url },
            async (error, redirectLocation, renderProps) => {
                if (error) {
                    resolve({ error })
                } else if (redirectLocation) {
                    resolve({
                        redirect: {
                            url: redirectLocation.pathname + redirectLocation.search,
                        }
                    })
                } else if (renderProps) {
                    const prefetches = renderProps.components
                        .filter(c => c.fetchData)
                        .map(c => c.fetchData(store))
                    await Promise.all(prefetches)
                    const element = (
                        <ApolloProvider client={client} store={store}>
                            <RouterContext {...renderProps} />
                        </ApolloProvider>
                    )

                    await getDataFromTree(element)
                    const content = ReactDOMServer.renderToString(element)
                    resolve({
                        content,
                        data: store.getState()
                    })
                } else {
                    cosole.warn('error SSR')
                }
            }
        )
    })
}

export default matchRoute