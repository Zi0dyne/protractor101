'use strict';

/*
   Description: Using 'done()' to handle async. behavior.

   The default timeout is set inn the conf file.
 */
describe('My test.', function () {

  it('testcase - promise', function (done) {
    var x = 100;
    var expected_value = 200;

    console.log('x is ' + x);

    setTimeout(function () {
      console.log('... update x from ' + x + ' to ...');
      x = expected_value;
      console.log('Update x to ' + x);
      expect(x).toEqual(expected_value);

      done();
    }, 1000);

    console.log('x is now ' + x);
  });
});