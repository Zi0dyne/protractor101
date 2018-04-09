/*
   Description: Using 'done()' to handle async. behavior.

   However, "timeout" is exceeded.
 */
describe('My test.', () => {

  it('testcase - promise', (done) => {
    let x = 100;
    let expected_value = 200;

    console.log(`x is ${x}`);

    setTimeout(() => {
      console.log(`... update x from ${x} to ...`);
      x = expected_value;
      console.log(`Update x to ${x}`);
      expect(x).toEqual(expected_value);

      done();
    }, 5000);

    console.log(`x is now ${x}`);
  })

})
