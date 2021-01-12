const path = require('path')
const webpack  = require('webpack')

const definePlugin = new webpack.DefinePlugin({
    saltire_name: JSON.stringify('saltire')
})

module.exports = {
    mode: 'none',
    plugins: [
        definePlugin
    ]
}