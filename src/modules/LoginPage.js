'use strict';
let util = require('util');


function _foo(msg) {
  console.log(`[foo]: ${msg}`);
}

let LoginPage = function() {

  let username = 'elvis';
  let password = 'gracelannd';

  this.foo = _foo;

  this.login = function() {
    console.log("[login]: Enter username");
    console.log("[login]: Enter password");
    console.log("[login]: Click OK");
  };

  this.logoff = function(option) {
    console.log("[logoff]: Click LogOff");
  };
};

function getPage() {
  return new LoginPage();
}

module.exports.getPage = getPage;