import { INCREMENT, DECREMENT } from '../actionType'
export const createIncrementAction = (data) => ({ type: INCREMENT, data })
export const createDecrementAction = (data) => ({ type: DECREMENT, data })
