"use strict";

console.log("== START ==");

// After timeout, the passed-in function is called.
var p1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 1000);
});

p1.then(function () {
  console.log("Boom");
});

console.log("== END ==");