import React, { Component } from 'react'

export default class Content extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                 这是 content 页面
            </div>
        )
    }
}
