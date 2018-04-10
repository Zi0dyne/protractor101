// ES6 - Arrays

console.log("== START ==");

// Create an array
let guitarists = [];


// Append values to an array
guitarists.push('Edward Van Halen');
guitarists.push('Jimi Hendix');
guitarists.push('Charlie Parker');
guitarists.push('Steve Vai');
guitarists.push('Scotty Moore');

Array.from(guitarists).forEach(function (player) {
  console.log(player);
});


console.log("== END ==");
