const fs = require('fs')

const rns = fs.createReadStream('./license')

rns.pipe(process.stdout);