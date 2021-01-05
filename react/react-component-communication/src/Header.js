import React, { Component } from 'react'

export default class Header extends Component {
    handleChange = () => {
        this.props.changeHeaderName(`saltire${Math.random() * 10}`)
    }
    render() {
        const { header_name } = this.props
        return (
            <div>
              <p>我是 Header 组件</p>
              <p>这是 APP 组件传递过来的数据：{header_name}</p> 
              <button onClick={this.handleChange}>改变它</button> 
            </div>
        )
    }
}
