'use strict';
let util = require('util');


function _foo(msg) {
  console.log(`[foo]: ${msg}`);
}

let SearchForm = function() {

  let search = '#search';
  let btn = '#search_btn';

  this.foo = _foo;

  this.search = function() {
    console.log("[searchForm]: Click Search");
  };

  this.enterText = function(option) {
    console.log("[enterText]: Click LogOff");
  };
};

function getForm() {
  return new SearchForm();
}

module.exports.getForm = getForm;