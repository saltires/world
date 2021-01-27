import fetch from 'node-fetch'

// interface Foo {
//     name: string;
//     age: number;
// }

// function foo(obj: Foo) {
//     console.log(obj);
// }

// var anm = {
//     name: '123',
//     age: 20,
//     ha: 'dasd'
// }

// foo(anm) //没问题
// foo({
//     name: '123',
//     age: 20,
//     ha: 'dasd'
// }) // 出错  ？？ 这是什么原因

// interface encrypto {
//     (key:string, value:string):string;
// }

// var hasKey:encrypto = (key:string, value:string):string => {
//     return ''
// }

// interface Animal {
//     name: string;
//     age: number;
//     eat(tip: string): string
// }

// class Dog implements Animal {
//     /** 动物的名称 */
//     name: string
//     /** 动物的年纪 */
//     age: number
//     constructor(name: string, age: number) {
//         this.name = name
//         this.age = age
//     }
//     /**
//      * 动物的本能方法
//      * @param tip {string} 
//      */
//     eat(tip: string) {
//         return `${tip}`
//     }
// }


// 接口的继承
// interface Animal {
//     name: string;
//     eat(tip: string): string
// }

// interface Web extends Animal {
//     work(type: string): string
// }

// class Person {
//     age: number
//     constructor(age:number) {
//         this.age = age
//     }
//     kick():void{
//         console.log('kick void');

//     }
// }

// class Ass extends Person implements Web {
//     name: string
//     constructor(name: string,age: number) {
//         super(age)
//         this.name = name
//     }
//     eat(tip: string): string {
//         return ''
//     }
//     work(type: string): string {
//         return `${this.name}在工作`
//     }
// }

// new Ass('hihi', 20).kick()


// function Hi(type: any):any {
//     return 'lala'
// }

// Hi(3) // 'lala' 返回值和输入值类型不一致,而且无法预料

// function Hi<S>(type: S): S {
//     return type
// }

// Hi('da')
// Hi(3)
// Hi<number>(3) // 正常
// Hi<number>('3') // 出错

// interface ConfigFn {
//     <T>(value: T, age: number):string
// }

// const Hi:ConfigFn = function<T>(value:T,age: number ):string {
//     return ''
// }

// // Hi<string>('123', 3)
// // Hi<string>(1, 3) 有问题

// function Hi<T>(value:T,age: number ):string {
//     return ''
// }

// interface ConfigFn<T>{
//     (value: T, age: number):string
// }

// function Hi<T>(value: T, age:number):string {
//     return ''
// }

// const Ki:ConfigFn<string> = Hi

// Ki(33, 33) // 编译错误
// Ki('ee', 33) // 正常

// Hi<string>('hihi', 3) // 正常
// Hi<number>('4', 5) // 编译错误

// class MinClass<T> {
//     public list:T[] = []
//     add(value:T):void {
//         this.list.push(value)
//     }
//     min():T {
//         var minNum = this.list[0]

//         for (var i = 0; i < this.list.length; i++) {
//             if (minNum > this.list[i]) {
//                 minNum = this.list[i]
//             }
//         }

//         return minNum
//     }
// }

// var m1 = new MinClass<number>()

// m1.add(11)
// m1.add(1)
// m1.add(3)
// m1.add(6)

// console.log(m1.min()); // 1


// var m2 = new MinClass<string>()

// m2.add('a')
// m2.add('b')
// m2.add('c')
// m2.add('d')

// console.log(m2.min()); // a


// interface User {
//     name: string;
//     age: number;
//     car?: string;
// }

// class MysqlDb<T> {
//     add(info: T):boolean {
//         console.log(info);
        
//         return true
//     }
// }

// const foo:User = {
//     name: 'saltire',
//     age: 11
// }

// const bar = new MysqlDb<User>()

// bar.add('') // 出错
// bar.add(foo) // 正常


// import x from './x.txt!text'
import xvue from './x.vue'

// console.log(xvue);


// const name:Hi = {

// }


// import * as PATH from 'path'

// let a:number = 

import * as URL from "url";

const a:Knight = {

}

const b:Hi = {
    
}