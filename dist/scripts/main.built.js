(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function Countdown (clockEl, endtime) {
  this.daysEl = clockEl.querySelector('.days');
  this.hoursEl = clockEl.querySelector('.hours');
  this.minsEl = clockEl.querySelector('.minutes');
  this.secsEl = clockEl.querySelector('.seconds');

  this.endtime = endtime;

  this._updateClock = this._updateClock.bind(this);
  this._updateClock();
  var timeinterval = setInterval(this._updateClock, 1000);
}

var proto = Countdown.prototype;

proto._updateClock = function() {
  var time = this._getTimeRemaining();

  this.daysEl.innerHTML = time.days;
  this.hoursEl.innerHTML = time.hours;
  this.minsEl.innerHTML = time.mins;
  this.secsEl.innerHTML = time.secs;
};

proto._getTimeRemaining = function() {
  var total = Date.parse(this.endtime) - Date.parse(new Date());

  var secs = Math.floor( (total/1000) % 60 );
  var mins = Math.floor( (total/1000/60) % 60 );
  var hours = Math.floor( (total/(1000*60*60)) % 24 );
  var days = Math.floor( total/(1000*60*60*24) );

  return {
    'total': total,
    'days': days,
    'hours': hours,
    'mins': mins,
    'secs': secs
  };
};

module.exports = Countdown;

},{}],2:[function(require,module,exports){
'use strict';

var Countdown = require('./lib/Countdown');

var Main = (function() {

	return {

		initialize : function() {
			console.log('shared');

			if(document.querySelector('.page-home')){
				console.log('countdown');
				var countdown = new Countdown(document.getElementById('clock'), '2016-10-01T16:30');
			}

			return this;
		}

	};

}());

module.exports = Main.initialize();

},{"./lib/Countdown":1}]},{},[2]);
