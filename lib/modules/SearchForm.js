'use strict';

var util = require('util');

function _foo(msg) {
  console.log('[foo]: ' + msg);
}

var SearchForm = function SearchForm() {

  var search = '#search';
  var btn = '#search_btn';

  this.foo = _foo;

  this.search = function () {
    console.log("[searchForm]: Click Search");
  };

  this.enterText = function (option) {
    console.log("[enterText]: Click LogOff");
  };
};

function getForm() {
  return new SearchForm();
}

module.exports.getForm = getForm;