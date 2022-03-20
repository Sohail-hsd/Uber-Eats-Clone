import { createStore } from 'redux'
import reducer from './reducers/index'

export default function configureStore(initinalState) {
    const store = createStore(reducer, initinalState)
    return store
}
