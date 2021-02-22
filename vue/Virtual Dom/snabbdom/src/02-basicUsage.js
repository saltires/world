import { init, h } from 'snabbdom'

let patch = init([])

let vnode = h(`div#container`, [
    h('h1', 'Hello Snabbdom'),
    h('p', '这是一个标签')
])

let app = document.querySelector('#app')

let oldVNode = patch(app, vnode)

setTimeout(() => {
    vnode = h(`div`, [
        h('h1', 'Hello Snabbdom1'),
        h('p', '这是一个标签1')
    ])
    patch(oldVNode, vnode)
    // 清空页面元素 -- 错误做法
    // patch(oldVNode, null)
    // 清空页面元素 -- 正确做法
    patch(oldVNode, h('!'))
}, 3000)

