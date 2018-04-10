'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ES6 - Class example.

var Vehicle = function () {
  function Vehicle() {
    _classCallCheck(this, Vehicle);

    this.totalCylinders = 0;
    this.make = 'TBD';
    this.wheels = '4';
    this.gasType = 'Gas';
  }

  _createClass(Vehicle, [{
    key: 'setWheels',
    value: function setWheels(n) {
      this.wheels = n;
    }
  }, {
    key: 'setGasType',
    value: function setGasType(t) {
      this.gasType = t;
    }
  }, {
    key: 'isElectric',
    value: function isElectric() {
      return this.gasType === 'electric';
    }
  }, {
    key: 'getTotalWheels',
    value: function getTotalWheels() {
      return this.wheels;
    }
  }]);

  return Vehicle;
}();

exports.default = Vehicle;