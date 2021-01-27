import { DE, ADD } from '../actionType'
export const createAddAction = (data) => ({ type: ADD, data })
export const createDeAction = (data) => ({ type: DE, data })

/**
 * 创建一个异步 action
 * @param {any} data 
 * @param {number} time 
 */
export const createAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createAddAction(data))
        }, time)
    }
}