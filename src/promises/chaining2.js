// Example of chaining promises.

function async1(timeout, msg) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(msg), timeout);
})
}

function async2(timeout, msg) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve("Yowza - " + msg), timeout);
})
}


console.log("== START ==");

async1(1000, 'Hi').then(msg => {
  console.log("msg1: " + msg);
  return msg;
}).
then(msg => {
  console.log("[received]: " + msg)
  return async2(msg)
}).
then(rc => {
  console.log("[rc: " + rc);
})

console.log("== END ==");