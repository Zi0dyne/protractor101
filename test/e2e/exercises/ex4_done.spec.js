/*
   Description: Using 'done()' to handle async. behavior.

   The default timeout is set inn the conf file.
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
    }, 1000);

    console.log(`x is now ${x}`);
  })

})
