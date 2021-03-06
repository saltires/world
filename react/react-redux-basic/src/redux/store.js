import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as reducers from './reducers'
import * as actions from './actions'
import thunk from 'redux-thunk'

const reducer = combineReducers(reducers)

export default createStore(reducer, applyMiddleware(thunk))

export {
    actions
}