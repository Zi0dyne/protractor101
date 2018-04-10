

import Vehicle from './Vehicle';

console.log("== START ==");


let myCar = new Vehicle();


console.log(`Total wheels at init is ${myCar.getTotalWheels()}`);

let isElectric = myCar.isElectric();

console.log(`Shouldn't be electric : ${isElectric}`);
myCar.setGasType('electric');

console.log(`Should be electric : ${myCar.isElectric()}`);