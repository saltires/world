const { src, dest, parallel, series, watch } = require('gulp')
const del = require('del')
const loadPlugins = require('gulp-load-plugins')
const plugins = loadPlugins()
const bs = require('browser-sync').create()

const data = {
    menus: [
        {
            name: 'Home',
            icon: 'aperture',
            link: 'index.html'
        },
        {
            name: 'Features',
            link: 'features.html'
        },
        {
            name: 'About',
            link: 'about.html'
        },
        {
            name: 'Contact',
            link: '#',
            children: [
                {
                    name: 'Twitter',
                    link: 'https://twitter.com/w_zce'
                },
                {
                    name: 'About',
                    link: 'https://weibo.com/zceme'
                },
                {
                    name: 'divider'
                },
                {
                    name: 'About',
                    link: 'https://github.com/zce'
                }
            ]
        }
    ],
    pkg: require('./package.json'),
    date: new Date()
}

const style = () => {
    return src('./src/assets/styles/*.scss', { base: 'src' })
        // 基本上每一个插件都会是以函数的方式去运行，并且函数执行的结果会是一个新的转换流
        .pipe(plugins.sass({
            outputStyle: 'expanded'
        }))
        .pipe(dest('temp'))
        .pipe(bs.reload({ stream: true }))
}

const script = () => {
    return src('src/assets/scripts/*.js', { base: 'src' })
        .pipe(plugins.babel({ presets: ['@babel/preset-env'] }))
        .pipe(dest('temp'))
        .pipe(bs.reload({ stream: true }))
}

const html = () => {
    return src('src/*.html', { base: 'src' })
        .pipe(plugins.swig({ data, defaults: { cache: false } })) // 防止模板缓存导致页面不能及时更新
        .pipe(dest('temp'))
        .pipe(bs.reload({ stream: true }))
}

const image = () => {
    return src('src/assets/images/**', { base: 'src' })
        .pipe(plugins.imagemin())
        .pipe(dest('dist'))
}

const font = () => {
    return src('src/assets/fonts/**', { base: 'src' })
        .pipe(plugins.imagemin())
        .pipe(dest('dist'))
}

const copy = () => {
    return src('public/**', { base: 'public' })
        .pipe(dest('dist'))
}

const clean = () => {
    return del(['dist', 'temp'])
}

const useref = () => {
    return src('temp/*.html', { base: 'temp' })
        .pipe(plugins.useref({ searchPath: ['temp', '.'] }))
        .pipe(plugins.if(/\.js$/, plugins.uglify()))
        .pipe(plugins.if(/\.css$/, plugins.cleanCss()))
        .pipe(plugins.if(/\.html$/, plugins.htmlmin({ collapseWhitespace: true, minifyCSS: true, minifyJS: true })))
        .pipe(dest('dist'))
}

const serve = () => {
    watch('src/assets/styles/*.scss', style)
    watch('src/assets/scripts/*.js', script)
    // watch('./src/assets/images/**', image)
    // watch('./src/assets/fonts/**', font)
    watch('src/*.html', html)
    // watch('./public/**', copy)

    watch([
        'src/assets/images/**',
        'src/assets/fonts/**',
        'public/**'
    ], bs.reload)

    bs.init({
        notify: false,
        port: 1066,
        // files: ["./dist/**"],
        server: {
            baseDir: ["temp", 'src', 'public'],
            routes: {
                "/node_modules": "node_modules"
            },
        }
    })
}

const compile = parallel(style, script, html)

const build = series(clean, parallel(series(compile, useref), copy, image, font))

const dev = series(clean, compile, serve)

module.exports = {
    compile,
    build,
    dev
}