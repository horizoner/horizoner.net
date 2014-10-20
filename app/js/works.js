define(function (require, exports, module) {
	(function () {
		$(".worksItem").click(function() {
			$('.worksInfoLayer').css('display', 'block');
		});

		$('.worksMore').click(function() {
			$.post('getMoreWorks.php', {'lastId': $('#worksLastId').val()}, function(data, error) {
				if (error != null) {
					alert('Error: ' + error);
				} else {
					// change nav
					$('.worksMore').css('display', 'none');
					$('.worksMoreLeft').css('display', 'inline-block');
					$('.worksMoreRight').css('display', 'inline-block');
					var i = 0;
					// replace all works
					$.each($('.worksItem'), function() {
						if (i < data.content.length) {
							$(this).find('img').attr('src', data.content[i].img);
							$(this).find('h3').attr('name', data.content[i].name);
							$(this).find('p').attr('info', data.content[i].info);
							$('#worksLastId').val(data.content[i].id)
						}
					});
				}
			}, 'json');
		});
		
		$('.worksCloseLayer').click(function() {
			$('.worksInfoLayer').css('display', 'none');
		});


 	})();
})