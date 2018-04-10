let util = require('util');

describe('Protractor Demo App', function() {

  beforeAll(() => {
    browser.waitForAngularEnabled(false);   // Not an Angular App.
  })

  afterAll(() => {
    browser.sleep(2000);
    browser.quit();
  })

  it('should have a title', function() {
    browser.get('https://stark-bastion-95510.herokuapp.com/playground/');
    expect(browser.getTitle()).toEqual('H20Dragon Playground');
  });

  it('should enter comment', () => {
    element(by.id('comment')).sendKeys('STPCon 2018');
    expect(element(by.id('comment')).getAttribute('value')).toEqual('STPCon 2018');
  })

  it('should display increment button', () => {
    expect(element(by.xpath('//button[text()="Increment"]')).isPresent()).toBe(true);
  })

  it('should increment counter', () => {
    for(let i = 0; i < 5; i++) {
      element(by.xpath('//button[text()="Increment"]')).click();
    }
    expect(element(by.xpath('//a[@id="clicks"]')).getText()).toEqual('5');
  })

  it('should pass async assertions', () => {
    let promises = [];
    let rc = null;

    promises.push(element(by.id('increment')).isPresent());
    promises.push(element(by.id('decrement')).isPresent());

    Promise.all(promises).then(rc => console.log(util.inspect(rc)));

    console.log("results => " + util.inspect(rc));
  })

  it('should pass async assertions with async', () => {
    let promises = [];
    let rc = null;
    let incrementButton = element(by.id('increment'));
    let decrementButton = element(by.id('decrement'));
    let expectedInputCount = 7;
    let inputList = element.all(by.css('input'));

    promises.push(incrementButton.isPresent());
    promises.push(decrementButton.isPresent());
    promises.push(browser.getTitle());
    promises.push(inputList.count())

    Promise.all(promises).then(rc => {
      console.log("assert ex2: " + util.inspect(rc));
      expect(rc).toEqual([true, true, 'H20Dragon Playground', expectedInputCount]);
    });


  })

});
