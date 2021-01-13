const path = require('path')

module.exports = {
    mode: 'none',
    optimization: {
        // 消除未引用的代码（这里并不会在打包后的代码中移除，只是移除了 webpack 文件对它的引用关系）
        usedExports: true,
        // 该配置用于压缩代码，通过usedExports和minimize这两个组合功能，就可以达成在打包后的代码中完全消除未引用代码的目的
        minimize: true
    }
}

// 如果将这两个组合配置视为 Tree Shaking 的功能，那么第一个 usedExports 就可以认为是用它来标记
// 一颗大树上的枯树叶，然后 minimize 负责摇掉它们