/**
 * 发布/订阅模式
 */

// 事件触发器
class EventEmitter {
    constructor() {
        this.subs = Object.create(null)
    }

    // 注册事件
    $on(eventType, handler) {
        this.subs[eventType] = this.subs[eventType] || []
        this.subs[eventType].push(handler)
    }

    // 触发事件
    $emit(eventType) {
        if (this.subs[eventType]) {
            this.subs[eventType].forEach(handler => {
                handler()
            });
        }
    }
}

// em 类似于信号中心
const em = new EventEmitter()


// ① 使用 em 订阅一个信号叫做“click”，在 click 信号发布时，就会打印 click1
em.$on('click', () => {
    console.log('click1')
})

// ② 使用 em 订阅一个信号叫做“click”，在 click 信号发布时，就会打印 click2
em.$on('click', () => {
    console.log('click2')
})

// ③ 发布信号 click
em.$emit('click')

// 其实真实情况下，①、②、③ 处的代码都是在不同任务中书写，这才会起到通讯的意义，这里为了方便，就写一起了