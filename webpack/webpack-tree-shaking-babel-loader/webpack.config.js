const path = require('path')

module.exports = {
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // 告诉 bable-loader 强制将代码中的 ES Modules 转为 CommonJS
                        // presets: [
                        //     ['@babel/preset-env', { modules: 'commonjs'}]
                        // ]
                        // 告诉 bable-loader 通过判断环境决定是否将代码中的 ES Modules 转为 CommonJS
                        // presets: [
                        //     ['@babel/preset-env', { modules: 'auto'}]
                        // ]
                        // 诉 bable-loader 不启用转换 ES Module 的插件，该插件位于 env 集合中
                        // presets: [
                        //     ['@babel/preset-env', { modules: false}]
                        // ]
                        presets: [
                            ['@babel/preset-env', { modules:  'commonjs'}]
                        ]
                    }
                }
            }
        ]
    },
    optimization: {
        // 消除未引用的代码（这里并不会在打包后的代码中移除，只是移除了 webpack 文件对它的引用关系）
        usedExports: true,
        // 该配置用于压缩代码，通过usedExports和minimize这两个组合功能，就可以达成在打包后的代码中完全消除未引用代码的目的
        minimize: true
    }
}


// modules 的值有以下几种'commonjs', 'amd', 'umd', 'systemjs' - 'auto'(default) - false