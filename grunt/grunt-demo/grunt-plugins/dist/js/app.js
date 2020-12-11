"use strict";

var count = 10;

var lodash = require('lodash');

console.log(lodash.camelCase('dasda'));
new Promise(function (resolve, reject) {
  if (count > 10) {
    resolve(count);
  } else {
    reject(count);
  }
});
