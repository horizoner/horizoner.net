define(function (require, exports, module) {
	(function(){
		$(".aboutMore").on('click',function(){
			var oldLeft = parseInt($(".aboutWra").css('left').replace('px',''));
			$(".aboutWra").animate({ left: oldLeft - 936 + 'px' }, "slow");
		})
		$(".aboutBack").on('click',function(){
			var oldLeft = parseInt($(".aboutWra").css('left').replace('px',''));
			$(".aboutWra").animate({ left: oldLeft + 936 + 'px' }, "slow");
		})
	})()
})