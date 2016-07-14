'use strict';

var Countdown = require('./lib/Countdown');
var ScrollReveal = require('scrollreveal');

var Main = (function() {

  return {

    initialize: function() {
      var sr = new ScrollReveal;

      if ( document.querySelector('.page-home') ) {
        var countdown = new Countdown( document.getElementById('clock'), '2016-10-01T16:30' );
      }

      if ( sr.isSupported() ) {
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
