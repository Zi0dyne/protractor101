'use strict';

var _Vehicle = require('./Vehicle');

var _Vehicle2 = _interopRequireDefault(_Vehicle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("== START ==");

var myCar = new _Vehicle2.default();

console.log('Total wheels at init is ' + myCar.getTotalWheels());

var isElectric = myCar.isElectric();

console.log('Shouldn\'t be electric : ' + isElectric);
myCar.setGasType('electric');

console.log('Should be electric : ' + myCar.isElectric());