import { createStore } from 'redux'
import reducers from './reducers.js'

export default function configureStore() {
    const store = createStore(reducers) 
    return store
}
