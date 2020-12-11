const sass = require('sass')
const loadGruntTasks = require('load-grunt-tasks')

module.exports = grunt => {
    grunt.initConfig({
        sass: {
            options: {
                // 关于options的配置选项，建议根据需求通过官方文档查阅
                implementation: sass
            },
            // 指定一个main目标，在这个目标中指定sass文件路径及输出的css 文件路径
            main: {
                files: {
                    // 键为输出路径，值为输入路径
                    'dist/css/main.css': 'src/scss/main.scss'
                }
            }
        },
        babel: {
            options: {
                // 指定编译哪些ECMAScript特性
                presets: ['@babel/preset-env']
            },
            main: {
                files: {
                    'dist/js/app.js': 'src/js/app.js'
                }
            }
        },
        watch: {
            js: {
                // 这里只指定了一个文件，实际使用时会使用通配符指定js文件夹下所有文件
                files: ['src/js/app.js'],
                // 指定'src/js/app.js'内容变化后，执行哪些任务
                tasks: ['bable']
            },
            css: {
                files: ['src/scss/*.scss'],
                tasks: ['sass']
            }
        }
    })
    
    // 为了保证先执行sass和babel任务再执行watch任务对文件进行监听，通常会做一个映射如下：
    // 这样，只需在终端中执行 yarn grunt 即可
    grunt.registerTask('default', ['sass', 'babel', 'watch'])
    
    // grunt-sass 同样也是一个多目标的任务，因此也需要在initConfig中为其配置一些目标
    // grunt.loadNpmTasks('grunt-babel')
    loadGruntTasks(grunt) // load-grunt-tasks会自动加载所有的grunt插件
}