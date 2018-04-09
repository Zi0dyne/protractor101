'use strict';

exports.config = {
  directConnect: true,

  onPrepare: function onPrepare() {
    browser.driver.manage().window().setSize(1680, 1050);

    global.isAngularSite = function (flag) {
      browser.ignoreSynchronization = !flag;
    };

    global.dvr = browser.driver;
  },

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../../../lib/e2e/exercises/ex4_done.spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 2000
  }
};