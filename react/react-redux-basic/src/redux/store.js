import { createStore, combineReducers, applyMiddleware } from '../../../react-react-redux-basic/src/redux/node_modules/redux'
import * as reducers from './reducers'
import * as actions from './actions'
import thunk from '../../../react-react-redux-basic/src/redux/node_modules/redux-thunk'

const reducer = combineReducers(reducers)

export default createStore(reducer, applyMiddleware(thunk))

export {
    actions
}