"use strict";

// Example of chaining promises.

function async1(timeout, msg) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve(msg), timeout);
  });
}

function async2(timeout, msg) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      return console.log("[msg]: " + msg);
    }, timeout);
  });
}

console.log("== START ==");

async1(1000, 'Hi').then(function (msg) {
  console.log("msg1: " + msg);
  return msg;
}).then(function (msg) {
  console.log("msg2: " + msg);
}).catch(function (reason) {
  console.error("ERROR: " + reason);
});

console.log("== END ==");