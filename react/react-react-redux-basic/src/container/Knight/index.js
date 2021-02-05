import { connect } from 'react-redux'
import UIKnight from '../../components/Knight'
import { actions } from '../../redux/store'

const mapStateToProps = state => ({state})


/** mapDispatchToProps 可以是一个函数，也可以简写为一个对象 */
// const mapDispatchToProps = dispatch => {
//     return {
//         dispatchCount: (value) => dispatch(actions.createAddAction(value)),
//         dispatchFix: (value) => dispatch(actions.createAddAction(value)),
//     }
// }

/** mapDispatchToProps 的简写，{方法名：action creator} */
const mapDispatchToProps = {
    dispatchCount: actions.createAddAction,
    asyncDispatch: actions.createAsyncAction
}



export default connect(mapStateToProps, mapDispatchToProps)(UIKnight)
