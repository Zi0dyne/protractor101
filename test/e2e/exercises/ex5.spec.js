
// Chai expectations
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
let util = require('util');

function asyncFcn(timeout, msg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { console.log(`== ${msg} ==`); resolve('ELVIS') }, timeout);
})
}


describe('My test.', () => {

  it('testcase - promise', () => {
    expect(asyncFcn(1000, "Hi")).to.eventually.equal('ELVIS');
  })
})
