define(function (require, exports, module) {
	exports.clickScroll = function(keynumber) {
		// trriger keydown event
		var e = $.Event('keydown');
		e.which = keynumber;
		$('.main').trigger(e);
 	}
})