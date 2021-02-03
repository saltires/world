import { connect } from 'react-redux'
import UIKnight from '../../components/Knight'
import { actions } from '../../redux/store'

const state = state => ({state})

const dispatchs = dispatch => {
    return {
        dispatchCount: (value) => dispatch(actions.createAddAction(value)),
        dispatchFix: (value) => dispatch(actions.createAddAction(value)),
    }
}

export default connect(state, dispatchs)(UIKnight)