import createHead from './render.js'
import './css/index.css'
import yby from './images/yby.jpg'

console.log('yby', yby)

const img = new Image()

img.src = yby

module.hot.accept('./images/yby.jpg', () => {
    img.src = yby
})

module.hot.accept('./render.js', () => {
    console.log('render.js 内容变更了')
})

const heading = createHead()

document.body.append(heading)
document.body.append(img)

