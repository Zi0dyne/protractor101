"use strict";

// Promise - reject()

var p = new Promise(function (resolve, reject) {
  reject('Nope');
});

p.then(function (rc) {
  console.log("RC is " + rc);
}).catch(function (reason) {
  console.error("ERROR: " + reason);
});