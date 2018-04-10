// Example of chaining promises.

function async1(timeout, msg) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(msg), timeout);
  })
}

function async2(timeout, msg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => console.log(`[msg]: ${msg}`), timeout);
})
}


console.log("== START ==");

async1(1000, 'Hi').then(msg => {
  console.log("msg1: " + msg);
  return msg;
}).
then(msg => {
  console.log("msg2: " + msg);
}).
catch((reason) => {
  console.error(`ERROR: ${reason}`);
})


console.log("== END ==");