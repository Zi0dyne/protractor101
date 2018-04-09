
console.log("Start");

let p = new Promise((resolve, reject) => {
  resolve('Yes');
})

p.then((rc) => { console.log(rc); })

console.log("End");
