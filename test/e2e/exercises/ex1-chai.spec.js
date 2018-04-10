// Chai expectations
let chai = require('chai');
let expect = chai.expect;
let util = require('util');

describe('My test.', function() {

  it('testcase - always passes.', function() {
    expect(1).to.equal(1);
  })

  it('testcase - should expect fail', function() {
    expect(false).to.equal(false);
  })

  it('testcase - arrays does not include 3', () => {
    let arr = [1, 2, 5, 7];

    expect(arr).to.be.an('array').that.does.not.include(3);
  })

  it('testcase - verify string', () => {
    let s = "Elvis";
    expect(s).to.be.a('string');
  })

})
