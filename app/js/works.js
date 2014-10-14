define(function (require, exports, module) {
	(function () {
		$(".worksItem").click(function() {
			$('.worksInfoLayer').css('display', 'block');
		});
		$('.worksCloseLayer').click(function() {
			$('.worksInfoLayer').css('display', 'none');
		})
 	})();
})