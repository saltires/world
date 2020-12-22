### 使用 Transform Stream 模拟 gulp 的核心工作原理 读取文件 》 转换文件 》 写入文件

这个实例中，我们利用 transform stream 对 css 文本内容做和压缩处理

`Note`：除了手动 new Transform 之外，日常数据处理 Transform 使用非常频繁，通过社区模块 through2 模块可以方便封装一个 Transform 流，API 十分简洁，例如 progress-stream 就是一个基于 through2 模块的可以展示进度信息的 stream 模块，被广泛用于展示下载进度

`Note`：使用 gulp 工作的过程可以认为就是利用 src 方法创建读取流，利用各类 gulp 插件作为转换流转换，最后以 dest 方法作为写入流写入文件的过程 