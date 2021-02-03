import React, { Component } from 'react'
// import store, { actions } from '../../redux/store'

export default class Knight extends Component {
    componentDidMount() {
        // console.log('store', store.getState());
    }

    /**
     * 通过 store 修改值
     */
    asyncDispatch = () => {
        // store.dispatch(actions.createAsyncAction(2, 2000))
    }

    dispatch = () => {
        this.props.dispatchCount(2)
    }

    render() {
        const { state } = this.props
        return (
            <div>
                <p>这是 Knight 组件</p>
                <p>这是从 APP 组件获取的数据：{state.counter}</p>

                <button onClick={this.asyncDispatch}>异步增加 2</button>
                <button onClick={this.dispatch}>增加 1</button>
            </div>
        )
    }
}
