var fs = require('fs')
  , ini = require('ini')

var config = ini.parse(fs.readFileSync('./.testrc', 'utf-8'))

// config.scope = 'local'
// config.database.database = 'use_another_database'
// config.paths.default.tmpdir = '/tmp'
// delete config.paths.default.datadir
// config.paths.default.array.push('fourth value')

console.log(config)

// expect 
// [Object: null prototype] {
//     section: [Object: null prototype] {
//       scope: 'local',
//       database: [Object: null prototype] {
//         user: 'dbuser',
//         password: 'dbpassword',
//         database: 'use_another_database'
//       },
//       paths: [Object: null prototype] { default: [Object: null prototype] }
//     }
//   }
