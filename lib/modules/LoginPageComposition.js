'use strict';

var util = require('util');

//
// Composition - Only grab those components we need for this page/component.
//
var searchForm = require('./SearchForm').getForm();

function _foo(msg) {
  console.log('[foo]: ' + msg);
}

var LoginPage = function LoginPage() {

  var username = 'elvis';
  var password = 'gracelannd';

  this.foo = _foo;

  this.login = function () {
    console.log("[login]: Enter username");
    console.log("[login]: Enter password");
    console.log("[login]: Click OK");
  };

  this.logoff = function (option) {
    console.log("[logoff]: Click LogOff");
  };
};

function getPage() {
  return new LoginPage();
}

module.exports.getPage = getPage;