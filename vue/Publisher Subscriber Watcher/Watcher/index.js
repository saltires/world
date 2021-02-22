/**
 * 观察者模式
 */

// 发布者
class Dep {
    constructor() {
        // 记录所有的订阅者
        this.subs = []
    }

    // 添加订阅者
    addSub(sub) {
        // 只有当订阅者存在且订阅者具有 update 方法时，才添加订阅者
        if (sub && sub.update) {
            this.subs.push(sub)
        }
    }

    // 发布通知 - notify 方法应当在事件触发时调用 - 让 notify 去调用所有观察者的 update 方法
    notify() {
        // 当事件发生时，遍历所有的订阅者，调用每个订阅者的 upadte 方法
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}

// 订阅者 - 观察者
class Watcher {
    update() {
        console.log('update')
    }
}

// 测试
const dep = new Dep()
const watcher = new Watcher()

dep.addSub(watcher)

dep.notify()