import { SaltirePromise } from './index.js'

// const foo = new SaltirePromise((resolve, reject) => {
//     // resolve(100)
//     reject('error')
// })

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

// foo.then().then().then(value => console.log(value), error => console.log(error))

const p1 = new SaltirePromise((resolve, reject) => {
    resolve('c')
})

// const p2 = new SaltirePromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('d')
//     }, 2000)
// })

// SaltirePromise.all(['a', 'b', p1, p2, 'e']).then((value) => {
//     console.log(value);
// })

p1.then(value => {
    console.log(value);
    return SaltirePromise.resolve(1)
}).finally((value, value1) => {
    console.log('value', value);
    console.log('value1', value1);
})