"use strict";

var util = require('util');

function asyncFcn(timeout, msg) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("== " + msg + " ==");resolve("[msg]: " + msg);
    }, timeout);
  });
}

console.log("START");

var promises = [];

promises.push(asyncFcn(1000, "Hi"));
promises.push(asyncFcn(500, "Bye"));
promises.push(asyncFcn(100, "Nite"));

var results = Promise.all(promises).then(function (rc) {
  return console.log(rc);
});

console.log("results => " + util.inspect(results));

console.log("END");