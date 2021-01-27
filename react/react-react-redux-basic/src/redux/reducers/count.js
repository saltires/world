import { ADD, DE } from '../actionType'

export default (preState = 0, action) => {
    switch (action.type) {
        case ADD:
            return preState + action.data
        case DE:
            return preState - action.data
        default:
            return preState
    }
}