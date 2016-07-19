(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Main = (function () {

  return {

    initialize: function () {
      this.htmlEl = document.documentElement;

      var style = this.htmlEl.style;
      var scrollRevealSupported = 'WebkitTransition' in style && 'WebkitTransform' in style ||
      'transition' in style && 'transform' in style;

      this._addTests({
        'scrollreveal': scrollRevealSupported
      })

      return this;
    },

    _addTests: function (tests) {
      for ( var attr in tests) {
        if ( tests[attr] ) {
          this.htmlEl.className += ' ' + attr;
        }
      }
    }

  };

}());

module.exports = Main.initialize();

},{}]},{},[1]);
