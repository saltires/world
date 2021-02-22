class Observer {
    constructor(data) {
        this.walk(data)
    }

    walk(data) {
        // 1. 判断 data 是否是对象
        if (!data || typeof data !== 'object') {
            return
        }

        // 2. 遍历 data 中对象的所有属性
        Object.keys(data).forEach(key => {
            this.defineReactive(data, key, data[key])
        })
    }

    defineReactive(obj, key, val) {
        const that = this
        // 负责收集依赖，并发送通知
        let dep = new Dep()
        // 如果 val 是对象，将 val 也转为响应式数据
        this.walk(val)

        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get() {
                // 收集依赖
                Dep.target && dep.addSub(Dep.target)
                return val
            },
            set(newVale) {
                if (newVale === val) {
                    return 
                }
                val = newVale
                // 当 data 的某个属性被赋值为一个新属性时，该新属性也会被转为响应式对象
                that.walk(newVale)
                // 发送通知
                dep.notify()
            }
        })
    }
}