module.exports = grunt => {
    grunt.initConfig({
        // 配置多任务的具体目标时，必须是一个对象
        // 如下，我们为build任务创建了两个目标，一个叫做css，一个叫做js
        // 执行build时，grunt会同时执行css和js这两个目标，也就相当于以两个子任务的形式去运行
        // 如果只希望运行build任务中的其中一个目标，比如js，那么可以使用：yarn grunt build:js
        // 在build对象中指定的任意键都会成为build任务中的一个目标，如这里的css和js，不过，有一个键除外，它叫做options，options对象会被作为任务的配置选项，可以在任务中通过this.options()方法回去
        build: {
            css: 'x',
            js: 'y',
            options: {
                name: 'test'
            }
        }
    })
    // 多目标任务，可以让任务根据配置形成多个子任务
    // 创建多目标任务时，必须为这种任务创建多个不同的目标，如果不配置就运行该任务就会直接报错，具体配置方法则是使用initConfig方法
    grunt.registerMultiTask('build', function () {
        console.log('build task')
        // 在build任务中，我们可以通过this来获取目标的相关信息
        console.log(`target: ${this.target},data: ${this.data}`)
        // 通过this.options方法获取该任务的配置选项
        const options = this.options()
        console.log(`options: ${options}`)
    })

    // 我们也可以为目标指定相应的配置选项
    // grunt.initConfig({
    //     build: {
    //         css: 'x',
    //         js: {
    //             // 目标的配置会覆盖掉build任务的options选项
    //             options: {
    //                 name: '目标的name会覆盖掉test'
    //             }
    //         },
    //         options: {
    //             name: 'test'
    //         }
    //     }
    // })
}