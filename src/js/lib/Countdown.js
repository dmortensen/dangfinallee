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
