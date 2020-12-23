const path = require('path')

module.exports = {
    // webpack 支持以 css 文件作为入口文件进行打包，虽然这在实际工作中没有意义，但是我们需要知道它可以以 css 文件作为入口文件
    // entry: './src/css/index.css',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
           {
               test: /\.css$/,
               use: [
                   'style-loader',
                   'css-loader'
               ]
           },
           {
               test: /\.jpg$/,
               use: 'file-loader'
           }
        ]
    }
}