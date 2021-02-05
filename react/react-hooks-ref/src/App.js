import React from 'react'

function App() {
  const inputName = React.useRef()

  function showValue() {
    console.log('inputName', inputName)
    alert(inputName.current.value)
  }

  return (
    <div>
      <input type="text" ref={inputName} />
      <button onClick={showValue}>show</button> 
    </div>
  )
}

export default App
