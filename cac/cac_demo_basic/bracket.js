const cli = require('cac')()

cli
  .command('deploy <folder>', 'Deploy a folder to AWS')
  .option('-s, --scale [level]', 'Scaling level')
  .action((folder, options) => {
    // ...
    console.log('folder', folder)
    console.log('options', options)
  })

cli
  .command('build [project]', 'Build a project')
  .option('-o, --out <dir>', 'Output directory')
  .action((folder, options) => {
    // ...
    console.log('folder', folder)
    console.log('options', options)
  })

cli.parse()

// 当在命令名中使用方括号时，尖方括号表示必需的命令参数，方括号表示可选参数。
// use method
// 1 node bracket.js deploy 
// expect: CACError: missing required args for command `deploy <folder>`
// 2 node bracket.js deploy foo
// expect: 
// folder foo
// options { '--': [] }
// 3 node bracket.js  deploy foo -s hh
// expect: 
// folder foo
// options { '--': [], s: 'hh', scale: 'hh' }
// 4 node bracket.js  deploy foo -s
// expect: 
// folder foo
// options { '--': [], s: true, scale: true }
// 5 node bracket.js build bar -o
// expect: CACError: option `-o, --out <dir>` value is missing
// 6 node bracket.js build bar -o hihi
// expect: 
// folder bar
// options { '--': [], o: 'hihi', out: 'hihi' }