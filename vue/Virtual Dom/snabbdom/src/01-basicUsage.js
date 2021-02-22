// Snabbdom 的核心仅仅是提供最基本的功能，只导出了三个函数，init（）和 h（）、thunk（）
// init 是一个高阶函数，返回 patch（）
// h()函数返回虚拟节点 VNode（也就是虚拟 DOM，在 Snabbdom 中用虚拟节点描述虚拟 DOM，它和虚拟节点是一个意思），这个函数我们在使用 Vue.js 中见过
// thunk()是一种优化策略，可以在处理不可变数据时使用
import { init, h, thunk } from 'snabbdom'

// 1、hello world
// 参数：数组、模块
// 返回值：patch 函数，作用对比两个 vnode 的差异更新到真实 DOM
let patch = init([])
// 使用 h 函数创建虚拟 DOM，这里 h 函数的参数：
// 第一个参数：标签 + 选择器
// 第二个参数：如果是字符串的话就是标签中的内容

let vnode = h('div#container.cls', 'hello world')

let app = document.querySelector('#app')

// 调用 patch 时，第一个参数可以是 DOM 元素，内部会把 DOM 元素转为 VNode，如果第一个参数直接就是 VNode，那就无需转换了
// 第二个参数：VNode
// patch 函数调用时，会去更新真实的 DOM，也就是把第二个参数的 VNode 渲染到真实界面上
// 返回值： VNode
let oldVNode = patch(app, vnode)

const vnode1 = h('div', 'hello change worlf')

patch(oldVNode, vnode1)
