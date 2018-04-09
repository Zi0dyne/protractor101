// Wrapping a Promise with a function

function asyncFcn(timeout, msg) {
  return new Promise((resolve, reject) => {
    console.log(".. Zzzzzzz");
    setTimeout(() => resolve(`[msg]: ${msg}`), timeout);
  })
}


console.log("START");


asyncFcn(1000, "Hi").then((rc) => {
  console.log(`Received: ${rc}`);
})



console.log("END");
