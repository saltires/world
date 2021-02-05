import React, { Component } from 'react'

const AppContext = React.createContext()
const { Provider } = AppContext

export default class App extends Component {
  state = {
    name: '兰诺一世',
    age: 76
  }
  render() {
    const { name, age } = this.state
    return (
      <div>
        <p>APP，{this.state.name}, {this.state.age}</p>
        <Provider value={{ name, age }}>
          <One></One>
        </Provider>
      </div>
    )
  }
}

export class One extends Component {
  render() {
    return (
      <div>
        <p>One, {this.props.name}</p>
        <Two></Two>
      </div>
    )
  }
}

export class Two extends Component {
  static contextType = AppContext
  render() {
    return (
      <div>
        <p>Two, {this.context.name}, {this.context.age}</p>
        <Three></Three>
      </div>
    )
  }
}

// export class Three extends Component {
//   static contextType = AppContext
//   render() {
//     return (
//     <div>
//       <p>Three, {this.context.name}, {this.context.age}</p>
//     </div>
//   )
// }
// }

/**
 * 如果想要在函数式组件中使用 context，那么必须使用 Consumer 
 */
function Three() {
  // Hooks 提供了 useContext,不但解决了 Consumer 难用的问题同时也解决了　contextType 只能使用一个 context 的问题。
  const x = React.useContext(AppContext)
  console.log(x)
  return (
    <div>
      {/* <p><Consumer>{value => `Three，${value.name}, ${value.age}`}</Consumer></p> */}
    </div>
  )
}
