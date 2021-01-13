const path = require('path')

module.exports = {
    mode: 'none',
    optimization: {
        sideEffects: true
    }
}

// 对于 component 文件夹下 index 文件的导出，虽然在src/index.js 文件中我们只使用了一个导出的模块 Button

// 但是，在打包后的文件中可以看到 Title Button Text 模块都被打包到了生成文件中

// 当对optimization对象下的sideEffects属性设为 true 来开启 sideEffects 特性后

// 并且在项目下的 package.json 文件中设置 sideEffects为 false，告诉 webpack 该项目下的模块没有副作用

// 通过这两个设置，webpack 在打包时便会自动去除那些在模块中没有被使用的代码

// 需要注意的是，通常在项目中，我们不会主动去设置 package.json 中的 sideEffects 属性，这个值通常是由 npm 包的 package.json 中设置

// 在webpack 的 production 模式下，sideEffects 特性自动启用

// 这个特性开启的好处便在于，如果某些 npm 包的作者导出了很多东西，但是我们只用到了其中的一个或几个，那么对于

// 没用到的导出，并且 npm 包的 package.json 文件已通过 sideeffects 指示这些模块是否具有副作用，那么打包时没有使用的导出就不会被打包到生成文件中