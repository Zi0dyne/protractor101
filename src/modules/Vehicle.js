// ES6 - Class example.

export default class Vehicle {

  constructor() {
    this.totalCylinders = 0;
    this.make = 'TBD';
    this.wheels = '4';
    this.gasType = 'Gas';
  }

  setWheels(n) {
    this.wheels = n;
  }

  setGasType(t) {
    this.gasType = t;
  }

  isElectric() {
    return this.gasType === 'electric';
  }

  getTotalWheels() {
    return this.wheels;
  }

}