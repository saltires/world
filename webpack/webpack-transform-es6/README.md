### 介绍
默认情况下，webpack 只识别项目中 js 文件中的 import 和 export 语句，之所以能识别，是因为它是一个打包工具，它必须对此作出识别

除此之外，webpack 不能设别其余任何的 ES6 新特性代码，更不会将其转换，如果我们希望 webpack 除了帮我们把零散的模块打包到一起，还希望在这个过程中它可以帮我们转换编译es6 新特性为 es5

这时，我们便需要使用 babel-loader 去处理每一个 js 文件，将其中包含的 ES6 新特性转为 ES5