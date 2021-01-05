import React, { Component } from 'react'
import Custom from './Custom'
import './App.css'

export default class App extends Component {
  state = {
    obj: {
      value: '001',
      name: 'saltire'
    }
  }

  handleKeyUp = (event) => {
    if(event.keyCode !== 13) return
  }
  handleButton = (event) => {
    console.log(event.target)
    console.log(this.input)
  }
  render() {
    return (
      <div className="App">
        <input type="text" onKeyUp={this.handleKeyUp} ref={(node) => this.input = node}/>
        <br/>
        <button onClick={this.handleButton}>获取信息</button>
        <Custom {...this.state.obj}></Custom>
      </div>
    )
  }
}
