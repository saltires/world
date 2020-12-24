const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

class MyPlugin {
    // apply函数在 webpack 工作时被自动调用
    // 它接受一个 compiler 对象参数，这个对象就是 webpack 工作过程中最核心的一个对象
    // 这个对象里包含了我们此次构建的所有配置信息，我们也是通过这个对象去注册钩子函数
    // 这里我们有个需求是：这个插件可以帮助我们删除打包后 js 文件中不必要的注释，使得 bundle.js 更容易阅读
    // 有了这个需求之后，我们就需要明确我们这个插件的执行时机，也就是我们把这个任务放到哪个钩子上面
    // 因为我们的需求是对打包后的 bundle.js 做处理，我们可以在 emit 钩子处执行这个插件
    // 根据文档当中的提示，我们发现，emit 钩子的执行时机是在即将向输出目录输出打包后的文件时执行，非常符合我们的需求
    apply(compiler) {
        // tap 方法用于注册钩子函数，该方法接受链各个参数，一个是插件名称，一个是挂载到钩子的处理函数
        compiler.hooks.emit.tap('MyPlugin', compilation => {
            // compilation可以；理解为此次打包过程中的上下文，我们所有打包过程中产生的结果都会放到这个对象当中
            // compilation.assets 属性可以取到向输出目录中输出的所有资源文件的信息
            // 它是一个对象，我们可以通过 for in 遍历这个对象，它的键是文件的名称，
            for (const name in compilation.assets) {
                console.log(name)
                // source 方法可以用来获取文件的内容
                console.log(compilation.assets[name].source())

                // 为了去掉 js 文件中的注释，首先需要判断文件是否以 js 结尾
                if (name.endsWith('.js')) {
                    const contents = compilation.assets[name].source()
                    const withoutComments = contents.replace(/\/\*\*+\*\//g, '')
                    compilation.assets[name] = {
                        source: () => withoutComments,
                        size: () => withoutComments.length
                    }
                }
            }
        })
    }  
}

module.exports = {
    mode: 'none',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'test bundle of adda',
            template: './src/index.ejs'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "public", to: "" },
            ],
        }),
        new MyPlugin()
    ]
}