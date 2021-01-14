import * as hihi from './module.js'

console.log(hihi)

// export default 导出的是一个对象，这一点和 export 有很大的区别 export 后面紧跟的括号只是语法而已，把要导出的项目放在括号内即可

// 而 export default 后面如果跟着括号，那么就表示导出的一个对象

// Notice： export default {} 和 import * as from '' 最好不要混用，如上打印出的 hihi：

// Module {Symbol(Symbol.toStringTag): "Module"}
// default: Object
// age: 20
// name: "saltire"
// space: {cat: "qishi"}
// __proto__: Object
// Symbol(Symbol.toStringTag): "Module"
// get default: ƒ ()
// set default: ƒ ()

// 可以看到，我们在module.js中真正要导出的数据其实存放在 hihi.default属性下，这无疑是自取麻烦