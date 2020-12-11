const count = 10

const lodash  =  require('lodash')

console.log(lodash.camelCase('dasda'))

new Promise((resolve, reject) => {
    if (count > 10) {
        resolve(count)
    } else {
        reject(count)
    }
})