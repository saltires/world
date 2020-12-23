const path = require('path')

module.exports = {
    mode: 'none',
    entry: './src/main.js',
    module: {
        rules: [
            {
                test: /.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}