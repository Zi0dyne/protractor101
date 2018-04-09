
console.log("== START ==");

// After timeout, the passed-in function is called.
let p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000);
})


p1.then(() => {
  console.log("Boom"); });


console.log("== END ==");

