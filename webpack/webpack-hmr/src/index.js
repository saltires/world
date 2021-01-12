import createHead from './render.js'
import './css/index.css'
import yby from './images/yby.jpg'

console.log('yby', yby)

const img = new Image()

img.src = yby

// 手动处理当./images/yby.jpg模块发生变化后，应当执行的逻辑
module.hot.accept('./images/yby.jpg', () => {
    img.src = yby
}) 

// 手动处理当./render.js模块发生变化后，应当执行的逻辑
module.hot.accept('./render.js', () => {
    console.log('render.js 内容变更了')
})

const heading = createHead()

document.body.append(heading)
document.body.append(img)

