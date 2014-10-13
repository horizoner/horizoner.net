define(function (require, exports, module) {
	// var $ = require('jquery');
	var action = require('action');

	(function () {
		$('#contactArrow').click(function(){
			action.clickScroll(40);
		});
 	})();
})