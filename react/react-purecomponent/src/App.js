import React, { Component } from 'react'


/**
 * ① Component 的问题之一：只要执行 setState方法，即使不修改任何 state 数据，组件也会重新 render
 * ② Component 的问题之二：只要当前组件重新 render，就会自动重新 render 该组件的所有子组件，但是当一个子组件不依赖该父组件的任何状态时，子组件往往是无需更新，这就存在着效率问题
 * ③ 效率高德组件更新时机应当是：只有当组件的 state 或 props 数据变化时才应该重新 render 组件
 * ④ 解决上述两个问题的方案是使用 PureComponent，PureComponent 内部自动在 shouldComponentUpdate 钩子中做出判断，如果 props 和 state 都没有改变，就阻止 render 执行
 * ⑤ 注意：PureComponent 内部使用的对象浅比较进行判断，因此setState 时千万不能使用如下形式：const obj = this.state; obj.name = 'hihi'; this.setState(obj)，
 * 因为 obj === this.state，PureComponent 认为 state 没有发生变化，因此 render 函数也就不会执行
 */

export default class App extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
