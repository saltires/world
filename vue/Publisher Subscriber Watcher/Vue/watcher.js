class Watcher {
    constructor(vm, key, cb) {
        this.vm = vm
        // data 中的属性名称
        this.key = key
        // 回调函数负责更新视图
        this.cb = cb

        // 把 watcher 对象记录到 Dep 类的静态属性 target 中
        Dep.target = this
        // 触发 get 方法，在 get 方法中会调用 addSub，也就是把当前 Watcher 对象添加到 dep 的 subs 数组中
        this.oldValue = vm[key]
        // 将当前 watcher 对象添加到 dep 中去后，清除静态属性 target，防止重复添加
        Dep.target = null
    }

    // 当数据变化的时候调用 cb 更细视图
    update() {
        let newValue = this.vm[this.key]

        if (newValue === this.oldValue) {
            return
        }

        this.cb(newValue)
    }
}