import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  state = {
    name: '',
    password: '',
    age: 18
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  handleFormChange = (type) => {
    return (event) => {
      const { value } = event.target

      this.setState({
        [type]: value
      })
    }
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <p>First name: <input type="text" onChange={this.handleFormChange('name')} /></p>
          <p>age: <input type="text" onChange={this.handleFormChange('age')} /></p>
          <p>Password <input type="password" onChange={this.handleFormChange('password')} /></p>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
