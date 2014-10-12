define(function (require, exports, module) {
	// var $ = require('jquery');

	(function () {
		$('#contactArrow').click(function() {
			var e = $.Event('keydown');
			e.which = 40; // down arrow
			$('.main').trigger(e);
		});
 	})();
})