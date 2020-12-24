import md from './hello.md'

console.log(md)

const ele = document.createElement('div')

ele.innerHTML = md

document.body.append(ele)