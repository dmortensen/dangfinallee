'use strict';

var Countdown = require('./lib/Countdown');
var ScrollReveal = require('scrollreveal');

var Main = (function() {

  return {

    initialize: function() {
      // Reset checkbox to unchecked state (closed navbar) on page load
      // Will set navbar to closed state when hitting back button
      var checkbox = document.querySelector('.navbar-state');
      checkbox.checked = false;

      if ( document.querySelector('.page-home') ) {
        // Using GMT of date: Oct 1 @ 11:30pm GMT for accurate time difference
        var countdown = new Countdown( document.getElementById('clock'), '2016-10-01T23:30' );
      }

      var sr = new ScrollReveal;
      if ( sr.isSupported() && document.querySelector('.page-story') ) {
        sr.reveal( '.row', {
          delay: 200,
          distance: '0',
          easing: 'ease-out',
          scale: 0.8
        });
      }

      return this;
    }

  };

}());

module.exports = Main.initialize();
