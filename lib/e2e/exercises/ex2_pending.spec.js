'use strict';

/*
   Description: Example of asynch. behavior effecting assertions.

   Note: ES6 (Arrow functions)
 */

describe('Exercise 2.', function () {

  it('should pass.', function () {
    expect(1).toEqual(1);
  });

  it('should be false', function () {
    expect(false).toBe.false;
  });

  it('what will happen due to async call', function () {
    var x = 100;
    var expected_value = 200;

    console.log('x is ' + x);

    setTimeout(function () {
      console.log('... update x from ' + x + ' to ...');
      x = expected_value;
      console.log('Update x to ' + x);
    }, 1000);

    console.log('x is now ' + x);
    expect(x).toEqual(expected_value);
  });
});