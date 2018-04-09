/*
   Description: Example of asynch. behavior effecting assertions.

   Note: ES6 (Arrow functions)
 */


describe('Exercise 2.', () => {

  it('should pass.', () => {
     expect(1).toEqual(1);
  })

  it('should be false', () => {
    expect(false).toBe.false;
  })


  it('what will happen due to async call', () => {
    let x = 100;
    let expected_value = 200;

    console.log(`x is ${x}`);

    setTimeout(() => {
       console.log(`... update x from ${x} to ...`);
       x = expected_value;
       console.log(`Update x to ${x}`);
    }, 1000);

    console.log(`x is now ${x}`);
    expect(x).toEqual(expected_value);
  })


})
