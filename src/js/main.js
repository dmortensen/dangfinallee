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
