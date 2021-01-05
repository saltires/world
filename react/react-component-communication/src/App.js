import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'

export default class App extends Component {
  state = {
    header_name: 'saltrie_header'
  }

  changeHeaderName = (value) => {
    this.setState({
      header_name: value
    })
  }
  
  render() {
    const { header_name } = this.state
    return (
      <div>
        <Header header_name={header_name}  changeHeaderName={this.changeHeaderName}></Header>
        <Content></Content>
      </div>
    )
  }
}
