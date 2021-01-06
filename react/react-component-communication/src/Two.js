import React, { Component } from 'react'

export default class Two extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.changeList}>改变状态</button>
            </div>
        )
    }
}
