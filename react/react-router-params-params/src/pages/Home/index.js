import React, { Component } from 'react'
import qs from 'qs'

export default class Home extends Component {
    render() {
        console.log(qs.parse(this.props.location.search, { ignoreQueryPrefix: true }));
        return (
            <div>
                 这是 Homne 页面
            </div>
        )
    }
}
