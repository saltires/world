import { connect } from 'react-redux'
import UIKnight from '../../components/Knight'
import { actions } from '../../redux/store'

const a = state => ({ count: state })

const b = dispatch => {
    return {
        dispatchCount: (value) => dispatch(actions.createAddAction(value))
    }
}

export default connect(a, b)(UIKnight)