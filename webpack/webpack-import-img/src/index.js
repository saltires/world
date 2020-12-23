import createHead from './render.js'
import './css/index.css'
import yby from './images/yby.jpg'

console.log('yby', yby)

const img = new Image()

img.src = yby

const heading = createHead()

document.body.append(heading)
document.body.append(img)
