const cli = require('cac')()

cli
  .command('rm <dir>', 'Remove a dir')
  .option('-r, --recursive', 'Remove recursively')
  .action((dir, options) => {
    console.log('remove ' + dir + (options.recursive ? ' recursively' : ''))
  })

cli.help()

cli.version('1.1.1')

cli.parse()

// use method
// 1 node command_specify.js --help
// expect:
// command_specify.js

// Usage:
//   $ command_specify.js <command> [options]

// Commands:
//   rm <dir>  Remove a dir

// For more info, run any command with the `--help` flag:
//   $ command_specify.js rm --help

// Options:
//   -h, --help  Display this message 

// 2 node command_specify.js rm qishi
// expect:
// remove qishi

// 3 node command_specify.js rm qishi -r
// expect:
// remove qishi recursively

// 4 node command_specify.js rm qishi -r -f
// expect:
// CACError: Unknown option `-f`

// Notice: When using brackets in command name, angled brackets indicate required command arguments, while square bracket indicate optional arguments.
// 当在命令名中使用方括号时，尖方括号表示必需的命令参数，方括号表示可选参数。