var validate = require("validate-npm-package-name")
 
console.log(validate("example.com"))
console.log(validate("under_score"))
console.log(validate("some-package"))
console.log(validate("123numeric"))
console.log(validate("excited!"))
console.log(validate("@npm/thingy"))
console.log(validate("@jane/foo.js"))