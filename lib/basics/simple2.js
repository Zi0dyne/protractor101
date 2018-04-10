'use strict';

// Define a variable with 'let' - scoping rules.

var x = 'STPCon 2018';

function foo() {
  var x = 'Ohh no!';

  console.log("[foo]: " + x);
}

console.log('Welcome to ' + x);

foo();

console.log("Last => " + x);