import React from 'react'

export default function State() {

    /** 这一行代码较为特殊，即使 State 函数被渲染多次，该行代码只有第一次执行是有效的 */
    const [count, setCount] = React.useState(0)

    function add() {
        /** setCount 函数有两种调用方式，与 setState 类似 */
        /** ① 参数为值 */
        // setCount(count + 1)
        /** ② 参数为函数 */
        setCount(count => count + 1)
    }

    return (
        <div>
            <h2>当前求和为{count}</h2>
            <h3 onClick={add}>加一</h3>
        </div>
    )
}
