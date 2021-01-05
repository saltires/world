import './App.css';
import React from 'react'
import PropsTypes from 'prop-types'

console.log('PropsTypes', PropsTypes)

const age = '12'

class App extends React.Component {
  state = {
    age: 20
  }

  render() {
    return (
      <div className="app">
        <div className="show">hihi</div>
        <div className="knight_container">
          <Knight age={age}></Knight>
        </div>
      </div>
    )
  }

  hi() {
    console.log('hi')
  }

}

class Knight extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="knight">
        <div>age: {this.props.age}</div>
        <div>name: {this.props.name}</div>
      </div>
    )
  }
}

Knight.defaultProps = {

}

Knight.propsTypes = {
  age: PropsTypes.number.isRequired,
  name: PropsTypes.string.isRequired
}

export default App
