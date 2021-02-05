import React from 'react'

function App() {

  const [counter, setCounter] = React.useState(0)
  
  // 相当于在componentDidMount 生命周期函数中
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setCounter(counter + 100)
  //   }, 3000)
  // }, [])

  // 以下两种写法都相当于 componentDidUpdate
  // React.useEffect(() => {

  // })
  // React.useEffect(() => {

  // }, [counter])

  // 相当于 componentWillUmount
  // 如下，在 componetDidMount 建立定时器，每隔 500 毫秒给 count 值加 10，然后在 componetWillUmount 时清除定时器
  // 当 React.useEffect 函数的返回值是一个函数时，该函数会在此函数组件被卸载时调用，相当于类式组件中的 componetWillUmount 生命钩子
  // React.useEffect函数的第二个参数为一个数组，用以指定当哪些 state 改变后，去执行 useEffect 函数指定的第一个参数（为函数），如果不指定，则默认所有 state 改变后都会执行
  // 如果指定为空数组，那么只有组件被挂载到页面中时才会执行一次，相当于 componentDidMount 生命周期钩子
  React.useEffect(() => {
    let interval = setInterval(() => {
      setCounter(counter => counter + 10)
    }, 500)

    return () => {
      clearInterval(interval)
    }
  }, [])

  function increment() {
    setCounter(counter + 1)
  }

  function decrement() {
    setCounter(counter - 1)
  }

  return (
    <div>
      <h2>这是 APP 组件，count 值为：{counter}</h2>
      <button onClick={increment}>加 1</button>
      <button onClick={decrement}>减 1</button>
    </div>
  )
}

export default App
