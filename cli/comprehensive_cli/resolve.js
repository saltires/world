const fetch = require('node-fetch');
const envPaths = require('env-paths')
const { promises, createWriteStream } = require('fs')
const chalk = require('chalk')
const { join } = require('path')
const { pipeline } = require('stream')
const { promisify } = require('util')
const { name } = require('./package.json')
const ora = require('ora')
const crypto = require('crypto')
const fs = promises
const extractZip = require('extract-zip')
const pipe = promisify(pipeline)

const config = {
    get paths() {
        return envPaths(name, { suffix: undefined })
    },
    template: 'ex',
    url: 'https://github.com/saltire-template/ex/archive/master.zip'
}

// fetch('https://assets-cdn.github.com/images/modules/logos_page/Octocat.png')
//     .then(res => {
//         const dest = fs.createWriteStream('./octocat.png');
//         res.body.pipe(dest);
//     });

/**
 * 使用 node-fetch 发起请求获取文件数据
 * @param {string} url 请求的地址
 * @param {object} init 请求参数
 * @returns {Promise}
 */
const request = async (url, init) => {
    const response = await fetch(url, init)

    // console.log('response', response.ok);
    if (response.ok) return response
    throw Error(`Unexpected response: ${response.statusText}`)
}

/**
 *  下载指定地址的文件，并将之存储在临时文件中
 * @param {string} url 
 * @returns {Promise<string>} 返回的是临时文件名称，从网络上获取的内容已经存放在临时文件中
 */
const downolad = async (url) => {
    const response = await request(url)

    // 创建临时目录
    try {
        fs.mkdir(config.paths.temp, { recursive: true })
    } catch (error) {
        console.log(chalk.red('创建临时目录失败'));
    }

    // 创建一个临时文件名称
    const filename = join(config.paths.temp, Date.now().toString() + '.tmp')

    // console.log(filename);
    await pipe(response.body, createWriteStream(filename))
    return filename
}



// console.log(chalk.red('创建临时目录失败'));
// console.log(chalk.red(config.paths.temp));

/** @expect /var/folders/f5/k1ylyb7j0gx67dk4n2bf_c300000gn/T/comprehensive_cli/1610765352693.tmp */
// (async () => {
//     console.log(await downolad('https://github.com/saltire-template/ex/archive/master.zip'));
// })()

/**
 * @date 2020-12-02
 * @param { string } 指定的地址
 * @author saltire
 * @description 判断指定的地址的文件类型
 * @return { Boolean }
 */
const exists = async (input) => {
    try {
        const stat = await fs.stat(input)

        // 判断指定的文件地址的类型
        if (stat.isDirectory()) {
            return 'dir'
        } else if (stat.isFile()) {
            return 'file'
        } else {
            return 'other'
        }
    } catch (err) {
        if (err.code !== 'ENOENT') {
            throw err
        }
        return false
    }
}

/**
 *  判断标的地址是否是目录
 * @param {string} input 
 */
const isDirectory = async (input) => {
    const result = await exists(input)
    return result === 'dir'
}

/**
 * @description 删除指定的文件系统地址（如果是目录，递归删除该目录下所有内容）
 * @return { Promise<void> }
 */
const remove = async (input, options) => {
    const result = await exists(input)

    // 当指定地址不存在时
    if (result === false) return

    // 如果是： file | other
    if (result !== 'dir') {
        return await fs.unlink(input)
    }

    // 最后对目录做处理
    const entries = await fs.readdir(input)

    // 递归删除目录中所有内容
    await Promise.all(entries.map(async item => {
        await remove(join(input, item), options)
    }))

    await fs.rmdir(input, options)
}

/**
 * @description 解压缩 zip 
 * @return { Promise<void> }
 * @doc https://github.com/shinnn/node-strip-dirs
 */
const extract = async (input, output, strip = 0) => {
    await extractZip(input, {
        dir: output,
        onEntry: entry => {
            if (strip === 0) return
            const items = entry.fileName.split(/\/|\\/)
            const start = Math.min(strip, items.length - 1)
            entry.fileName = items.slice(start).join('/')
        }
    })
}

/**
 * 解析地址，发起请求，建立临时文件并存储下载内容，解压文件到目标文件夹
 * @param {string} url 请求地址
 */
const resolve = async (urlParams) => {
    const url = urlParams || config.url
    // 为 url 生成唯一的 16位 hash
    const hash = crypto.createHash('md5').update(url).digest('hex').substr(8, 16)
    // 在系统缓存中生成该以该 hash 命名的文件夹(这里未实际创建，只是拼接处地址)
    config.src = join(config.paths.cache, hash)

    // console.log('src', config.src)

    // 判断系统缓存文件中是否存在这样的文件夹
    const isexists = await isDirectory(config.src)

    // console.log(isexists);

    // 如果系统缓存中已经存在该文件夹，删除掉它
    isexists && await remove(config.src)

    // 下载模板通常需要几分钟，这里给出提示
    console.log(chalk.blue(`\n ## 开始为您下载项目模板[${config.template}]，这通常需要几分钟的时间!\n`))

    const spinner = ora('下载模板中...').start()

    try {
        // 下载zip文件，temp是一个zip文件的绝对路径
        const temp = await downolad(url)

        // 解压zip文件到目标项目中
        await extract(temp, config.src, 1)

        console.log('config.src', config.src)

        // 解压完成后，清除temp
        await remove(temp)

        spinner.succeed('模板下载成功~~\n')
    } catch (error) {
        spinner.stop()
        throw new Error(`下载模板文件${ctx.template}失败，原因是：${e.message}.`)
    }
}

exports.resolve  = resolve

// resolve()
