// examples/help.js
const cli = require('cac')()

cli.option('--type [type]', 'Choose a project type', {
  default: 'node',
})
cli.option('--name <name>', 'Provide your name')

cli.command('lint [...files]', 'Lint files').action((files, options) => {
  console.log(files, options)
})

// Display help message when `-h` or `--help` appears
cli.help()
// Display version number when `-v` or `--version` appears
// It's also used in help message
cli.version('0.0.0')

cli.parse()

// use method:

// 1 node show_help_message.js --help
// expect:
// show_help_version.js/0.0.0

// Usage:
//   $ show_help_version.js <command> [options]

// Commands:
//   lint [...files]  Lint files

// For more info, run any command with the `--help` flag:
//   $ show_help_version.js lint --help

// Options:
//   --type [type]  Choose a project type (default: node)
//   --name <name>  Provide your name 
//   -h, --help     Display this message 
//   -v, --version  Display version number 

// 2 node show_help_version.js --version
// expect:
// show_help_version.js/0.0.0 darwin-x64 node-v14.15.1