"use strict";

var count = 10; // const lodash  =  require('lodash')

new Promise(function (resolve, reject) {
  if (count > 10) {
    resolve(count);
  } else {
    reject(count);
  }
});
