const marked = require('marked')

// loader应该向外导出一个函数，这个函数用以处理相应的资源文件，并返回最终的结果（如果返回的最终结果不是 js，则你必须将这个结果交给其他 loader 处理）
// 如下面的代码中，经过 marked 处理后的内容是一段 html 字符串，如果希望直接返回，那么需要返回如下`module.exports = ${JSON.stringify(result)}`
// 我们知道，html-loader 可以处理这种 html 字符串，所以如果你不想处理，也可以直接返回这个 html 字符串，但是需要在webpack 的配置文件中配置该 loader 的下一个处理 loader
// 为 html-laoder，总之，返回给 webpack 的最终结果必须是一段  js 代码

// 工作流 1：md-loader => html-loader => budle.js
// 工作流 2：md-loader => bundle.js

// module.exports = source => {
//     const result = marked(source)

       // 这里返回一个 js 代码用来作为这个 loader的最终处理结果呈现给 webpack
//     return `module.exports = ${JSON.stringify(result)}`
// }

module.exports = source => {
    // 这里直接返回被 marked 处理后的 html 字符串，将之交给 html-loader 处理
    return result = marked(source)
}