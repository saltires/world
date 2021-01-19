import React, { Component } from 'react'

export default class About extends Component {
    render() {
        console.log(this.props.match.params);
        return (
            <div>
                这是 about 页面
            </div>
        )
    }
}
