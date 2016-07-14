'use strict';

var Main = (function () {

  return {

    initialize: function () {
      this.htmlEl = document.documentElement;

      var style = this.htmlEl.style;
      var scrollRevealSupported = 'WebkitTransition' in style && 'WebkitTransform' in style ||
      'transition' in style && 'transform' in style;

      this._addTests({
        'sr': scrollRevealSupported
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
