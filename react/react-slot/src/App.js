import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        这是 APP 组件
        {/* <A slot={name => <div>{name}</div>}></A> */}
        <A slot={name => <C name={name}></C>} knight={name => <div>{name}</div>}></A>
        {/* <A></A> */}
      </div>
    )
  }
}

export class A extends Component {
  state = {
    name: 'A-state'
  }
  render() {
    const { name } = this.state

    if (typeof this.props.slot === 'function') {
      return (
        <div>
          这是 A 组件
          {this.props.slot(name)}
          {this.props.knight(name)}
        </div>
      )
    }

    return (
      <div>
        这是 A 组件
      </div>
    )
  }
}

export class B extends Component {
  render() {
    return (
      <div>
        这是 B 组件
      </div>
    )
  }
}

export class C extends Component {
  render() {
    return (
      <div>
        这是 C 组件
        {this.props.name}
      </div>
    )
  }
}