$(function(){
	$(".aboutMore").on('click',function(){
		var oldLeft = parseInt($(".aboutWra").css('left').replace('px',''));
		$(".aboutWra").animate({ left: oldLeft - 908 + 'px' }, "slow");
	})
	$(".aboutBack").on('click',function(){
		var oldLeft = parseInt($(".aboutWra").css('left').replace('px',''));
		$(".aboutWra").animate({ left: oldLeft + 908 + 'px' }, "slow");
	})
})