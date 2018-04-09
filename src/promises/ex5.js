let util = require('util');

function asyncFcn(timeout, msg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { console.log(`== ${msg} ==`); resolve(`[msg]: ${msg}`) }, timeout);
  })
}


console.log("START");


let promises = [];

promises.push(asyncFcn(1000, "Hi"));
promises.push(asyncFcn(500, "Bye"));
promises.push(asyncFcn(100, "Nite"));

let results = Promise.all(promises).then((rc) => console.log(rc));

console.log("results => " + util.inspect(results));

console.log("END");
