### 介绍
这个项目通过将 mode 选项设为 none 以观察 webpack 打包后的源代码，通过分析源代码（webpack bootstrap）可以发现 webpack 做的事情其实可以归纳为两件事：
- 打包所有的资源文件，