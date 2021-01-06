import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  state = {
    checked: false
  }
  handleChange = (event) => {
    this.setState({
      checked: event.target.checked
    })
  }
  render() {
    const { checked } = this.state
    return (
      <div className="App">
        <div className="content" style={{backgroundColor: checked ? '#00f' : "#ff0"}}></div>
        <input type="checkbox" value={checked} onChange={this.handleChange}/>
      </div>
    )
  }
}
