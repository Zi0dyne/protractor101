// Promise - reject()

let p = new Promise((resolve, reject) => {
  reject('Nope');
});


p.then((rc) => {
  console.log("RC is " + rc);
}).
catch(function(reason) {
  console.error(`ERROR: ${reason}`);
});