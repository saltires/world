const fs  = require('fs')
const { Transform } = require('stream')

exports.default = () => {
    // 读取文件
    const read = fs.createReadStream('normalize.css')
    // 写入文件
    const write = fs.createWriteStream('normalize1.css')

    // 转换文件
    const transform = new Transform({
        transform: (chunk, encoding, callback) => {
           // 核心转换过程实现
           // chunk =》 读取流中读取到的数据（Buffer）
           const input = chunk.toString()
           const output = input.replace(/\s+/g, '').replace(/\/\*.+?\*\//g, '')
           callback(null, output) 
        }
    })
    

    read.pipe(transform).pipe(write)

    return read
}