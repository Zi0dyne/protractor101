"use strict";

// Promises - example of fufilling always with 'Yes'

console.log("Start");

var p = new Promise(function (resolve, reject) {
  resolve('Yes');
});

p.then(function (rc) {
  console.log(rc);
});

console.log("End");