// examples/basic-usage.js
const cli = require('cac')()

cli.option('--type <type>', 'Choose a project type', {
  default: 'node',
})

const parsed = cli.parse()

console.log(JSON.stringify(parsed, null, 2))

// use methods: node basic.js --type foo
// expect: {
//  "args": [],
//  "options": {
//    "--": [],
//    "type": "foo"
//   }
// }
// or
// use methods: node basic.js --type foo --name bar test
// expect: {
//   "args": [
//     "test"
//   ],
//   "options": {
//     "--": [],
//     "type": "foo",
//     "name": "bar"
//   }
// }