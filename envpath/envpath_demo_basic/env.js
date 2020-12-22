const  os =  require('os')
const envPaths = require('env-paths');

const paths = envPaths('MyApp');

console.log(paths.data)
//=> /Users/mac/Library/Application Support/MyApp-nodejs

console.log(paths.config)
//=> /Users/mac/Library/Preferences/MyApp-nodejs

console.log(paths.cache)
// => /Users/mac/Library/Caches/MyApp-nodejs

console.log(paths.temp)
// => /var/folders/f5/k1ylyb7j0gx67dk4n2bf_c300000gn/T/MyApp-nodejs

console.log(paths.log)
// => /Users/mac/Library/Logs/MyApp-nodejs

const path = require('path')

const str = '/root/a/b/1.txt'

console.log(path.dirname(str))  // 获取文件目录：/root/a/b
console.log(path.basename(str)) // 获取文件名：1.txt
console.log(path.extname(str)) // 获取文件后缀：.txt
console.log(path.resolve(str, '../c', 'build', 'strict')) // 将路径解析为绝对路径：C:\root\a\b\c\build\strict
console.log(path.resolve(str, '../c', 'build', 'strict', '../..', 'assets')) // 将路径解析为绝对路径：C:\root\a\b\c\assets
console.log(path.resolve(__dirname, 'build')) // 将路径解析为绝对路径：C:\projects\nodejs-tutorial\lesson12\build



console.log(os.homedir())
