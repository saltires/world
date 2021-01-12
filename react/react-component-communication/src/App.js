// import React, { Component } from 'react'
// import Header from './Header'
// import Content from './Content'

// export default class App extends Component {
//   state = {
//     header_name: 'saltrie_header'
//   }

//   changeHeaderName = (value) => {
//     this.setState({
//       header_name: value
//     })
//   }

//   render() {
//     const { header_name } = this.state
//     return (
//       <div>
//         <Header header_name={header_name}  changeHeaderName={this.changeHeaderName}></Header>
//         <Content></Content>
//       </div>
//     )
//   }
// }

// 父子组件通讯 - 涉及三个级别的数据传输
import React, { Component } from 'react'
import One from './One'

export default class App extends Component {
  state = {
    list: ['hello', 'baby']
  }
  changeList = () => {
    const {list} = this.state
    this.setState({
      list: list.reverse()
    })
  }
  render() {
    const { list } = this.state
    return (
      <div>
        <One list={list} changeList={this.changeList}></One>
        {/* <One list={1} changeList={this.changeList}></One> */}
      </div>
    )
  }
}

