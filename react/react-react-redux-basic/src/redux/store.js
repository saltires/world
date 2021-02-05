import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as reducers from './reducers'
import * as actions from './actions'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers(reducers)

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export {
    actions
}