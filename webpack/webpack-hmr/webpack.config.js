const path = require('path')
const webpack = require('webpack')

module.exports = {
    // webpack 支持以 css 文件作为入口文件进行打包，虽然这在实际工作中没有意义，但是我们需要知道它可以以 css 文件作为入口文件
    // entry: './src/css/index.css',
    mode: 'development',
    devServer: {
        hot: true,
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
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10 * 1024,
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}