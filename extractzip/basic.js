const extract = require('extract-zip')
const path = require('path')

//const source = '大会员迭代.xmind.zip'
const source = 'right-pc-master.zip'

console.log(process.cwd())
console.log(__dirname)

async function main() {
    try {
        console.log(path.resolve('1. ', __dirname, source))
        console.log(path.resolve('2. ', __dirname))
        await extract(path.resolve(__dirname, source), {
            dir: path.resolve(__dirname, 'dist'), onEntry: entry => {
                const items = entry.fileName.split(/\/|\\/)
                const start = Math.min(1, items.length - 1)
                entry.fileName = items.slice(start).join('/')
            }
        })
        console.log('Extraction complete')
    } catch (err) {
        // handle any errors
        console.log(err)
    }
}

main()