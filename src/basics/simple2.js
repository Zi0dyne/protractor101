// Define a variable with 'let' - scoping rules.

let x = 'STPCon 2018';

function foo() {
  let x = 'Ohh no!';

  console.log("[foo]: " + x);
}

console.log(`Welcome to ${x}`);

foo();

console.log("Last => " + x);


