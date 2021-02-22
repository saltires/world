import { init, h } from 'snabbdom'

// 1. 导入模块
import style from 'snabbdom/modules/style'
import eventlisteners from 'snabbdom/modules/eventlisteners'

// 2. 注册模块
 let patch = init([
     style,
     eventlisteners
 ])

// 3. 使用 h（）函数的第二个参数传入模块需要的数据（对象）
// 这个函数的第三个参数：如果是字符串，则作为 div 元素的内容，如果是一个数组，那么数组内可以填写该 div 元素的所有子元素
let vnode = h('div', {
    // 在 style 对象中表示行内样式
    style: {
        backgroundColor: 'red'
    },
    // 使用 on 描述事件
    on: {
        click: eventHandler
    }
}, [
    h('h1', 'Hello Snabbdom'),
    h('p', '这是 p 标签')
])

function eventHandler() {
    console.log('点击我了')
}

let app = document.querySelector('#app')

patch(app, vnode)