// Example of chaining promises.

function async1(timeout, msg) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve('[from async1] - ' + msg), timeout);
})
}

function async2(timeout, msg) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve("[from async2] - " + msg), timeout);
})
}


console.log("== START ==");

async1(1000, 'Hi').then(msg => {
  console.log("msg: " + msg);
  return msg;
}).
then(msg => {
  console.log("[received]: " + msg);
  return async2(2000, msg);
}).
then(rc => {
  console.log("[received2]: " + rc);
}).
catch((reason) => {
  console.error(`ERROR: ${reason}`);
})

console.log("== END ==");