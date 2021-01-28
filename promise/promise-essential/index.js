/**
 * 关于SaltirePromise状态的枚举
 * @readonly
 * @enum {number}
 */
const PromiseState = {
    /** 枚举 - SaltirePromise 状态 - 成功 */
    FULFILLED: 'fulfilled',
    /** 枚举 - SaltirePromise 状态 - 失败 */
    REJECTED: 'rejected',
    /** 枚举 - SaltirePromise 状态 - 等待中 */
    PENDING: 'pending'
}

class SaltirePromise {
    constructor(executor) {
        /** executor 总是立即执行 */
        try {
            executor(this.resolve, this.reject)
        } catch (error) {
            this.reject(error)
        }
    }

    /** SaltirePromise 状态默认为等待中 */
    state = PromiseState.PENDING

    /** then 方法传递过来的值 */
    value = undefined

    /** reject 方法传递过来的值 */
    error = undefined

    /** 缓存成功回调函数 */
    successCallback = []

    /** 缓存失败回调函数 */
    failCallback = []

    /**
     * resolve 函数调用表示 Promise 的状态由 pending 变为 fulfilled
     */
    resolve = value => {
        if (this.state !== PromiseState.PENDING) return
        this.state = PromiseState.FULFILLED
        this.value = value

        /** 当 promise 的 executor 中存在异步代码，并且之后多次调用了实例 then 方法，依次去执行这些 then 方法传入的回调函数*/
        while (this.successCallback.length) this.successCallback.shift()()
    }

    /**
     * reject 函数调用表示 Promise 的状态由 pending 变为 rejected
     */
    reject = error => {
        if (this.state !== PromiseState.PENDING) return
        this.state = PromiseState.REJECTED
        this.error = error

        /** 当 promise 的 executor 中存在异步代码，并且之后多次调用了实例 then 方法，依次去执行这些 then 方法传入的回调函数*/
        while (this.failCallback.length) this.failCallback.shift()()
    }

    /**
     * promise 的状态发生变化时 then 方法被调用
     * @param {function} successCallback  成功的回调函数
     * @param {function} failCallback  失败的回调函数
     */
    then(successCallback, failCallback) {
        successCallback = successCallback ? successCallback : value => value
        failCallback = failCallback ? failCallback : error => { throw error }
        const chainPronise = new SaltirePromise((resolve, reject) => {
            if (this.state === PromiseState.FULFILLED) {
                /** 这里之所以使用 setTimeout 是为了让 setTimeout 中代码变为异步，以便在其中获取到 chainPronise */
                setTimeout(() => {
                    try {
                        let callbackResult = successCallback(this.value)
                        /**
                         * 1、callbackResult 可能是一个普通值也可能是一个 promise 对象，需要分别做处理
                         * 2、如果callbackResult 是 promise 对象，需要根据该 promise 对象的结果决定调用 resolve 还是 reject
                         * 3、callbackResult 可以是一个 promise，但是，它绝对不能是 chainPronise 本身，否则就发生了 promise 的死循环调用
                         * 4、因此当 callbackResult === chainPronise 时，抛出错误
                         */
                        resolveSuccessCallback(chainPronise, callbackResult, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                }, 0)
            } else if (this.state === PromiseState.REJECTED) {
                /** 这里之所以使用 setTimeout 是为了让 setTimeout 中代码变为异步，以便在其中获取到 chainPronise */
                setTimeout(() => {
                    try {
                        let callbackResult = failCallback(this.error)
                        resolveSuccessCallback(chainPronise, callbackResult, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                }, 0)
            } else {
                this.successCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let callbackResult = successCallback(this.value)
                            resolveSuccessCallback(chainPronise, callbackResult, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    }, 0)
                })
                this.failCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let callbackResult = failCallback(this.error)
                            resolveSuccessCallback(chainPronise, callbackResult, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    }, 0)
                })
            }
        })

        return chainPronise
    }
}

/**
 * 解析并处理 then 方法第一个回调函数执行后的返回结果
 * @param {function|any} callbackResult then 方法第一个回调函数执行后的返回结果
 * @param {function} resolve  resolve 函数
 * @param {function} reject  reject 函数
 */
function resolveSuccessCallback(chainPronise, callbackResult, resolve, reject) {
    /** 当用户调用实例 A 的 then 方法时返回了该 promise 实例 A 本身，会造成死循环，抛出错误 */
    if (chainPronise === callbackResult) {
        return reject(new TypeError('chaining cicle detected for SaltirePromise'))
    }

    if (callbackResult instanceof SaltirePromise) {
        /** promise 对象 */
        // callbackResult.then(value => resolve(value), error => reject(error)) 可以简写为如下：
        callbackResult.then(resolve, reject)
    } else {
        /** 普通值 */
        resolve(callbackResult)
    }
}

export {
    SaltirePromise
}