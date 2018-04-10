"use strict";

// Wrapping a Promise with a function

function asyncFcn(timeout, msg) {
  return new Promise(function (resolve, reject) {
    console.log(".. Zzzzzzz");
    setTimeout(function () {
      return resolve("[msg]: " + msg);
    }, timeout);
  });
}

console.log("START");

asyncFcn(1000, "Hi").then(function (rc) {
  console.log("Received: " + rc);
});

console.log("END");