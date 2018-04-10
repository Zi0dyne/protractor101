"use strict";

// Example of chaining promises.

function async1(timeout, msg) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve('[from async1] - ' + msg), timeout);
  });
}

function async2(timeout, msg) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve("[from async2] - " + msg), timeout);
  });
}

console.log("== START ==");

async1(1000, 'Hi').then(function (msg) {
  console.log("msg: " + msg);
  return msg;
}).then(function (msg) {
  console.log("[received]: " + msg);
  return async2(2000, msg);
}).then(function (rc) {
  console.log("[received2]: " + rc);
}).catch(function (reason) {
  console.error("ERROR: " + reason);
});

console.log("== END ==");