'use strict';

var Main = (function() {

	return {

		initialize : function() {
			console.log('shared');

			return this;
		}

	};

}());

module.exports = Main.initialize();
