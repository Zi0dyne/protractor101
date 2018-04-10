// Objects/Hash
'use strict';

let util = require('util');

let vehicle = { wheels: 4, engine: '8 Cylinders'};

console.log("Vehicle: " + vehicle);

console.log("=> " + util.inspect(vehicle));


console.log(`Total wheels = ${vehicle.wheels}`)
console.log(`Engine type  = ${vehicle['engine']}`)


console.log("Dump key/value pairs:")
for (let key in vehicle) {
    console.log(`${key} ==> ${vehicle[key]}`);
}
