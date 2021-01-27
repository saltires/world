import { INCREMENT, DECREMENT } from '../actionType'

export default (preState = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return preState + action.data
        case DECREMENT:
            return preState - action.data
        default:
            return preState
    }
}