

describe('Protractor Demo App', function() {

  beforeAll(() => {
    browser.waitForAngularEnabled(false);   // Not an Angular App.
  })

  it('should have a title', function() {
    browser.get('https://stark-bastion-95510.herokuapp.com/playground/');
    expect(browser.getTitle()).toEqual('H20Dragon Playground');
  });
});