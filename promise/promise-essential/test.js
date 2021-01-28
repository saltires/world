import { SaltirePromise } from './index.js'

const foo = new SaltirePromise((resolve, reject) => {
    // resolve(100)
    reject('error')
})

// promise 死循环调用
// const bar = foo.then((value) => {
//     console.log('value', value);
//     return bar
// }, (error) => {
//     console.log('error', error);
// })

// bar.then((value) => {
//     console.log('value', value);
// }, (error) => {
//     console.log('error', error);
// })

foo.then().then().then(value => console.log(value), error => console.log(error))