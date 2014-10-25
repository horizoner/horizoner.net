define(function(require, exports, module) {
/*	(function () {
		var reqUrl = 'http://192.168.1.102/horizoner.net/index.php/Index/Index/handle_work';
		$.post(reqUrl, {'lastId': $('#worksLastId').val()}, function(data) {
			if (!data.success) {
				alert('Error: ...');
			} else {
				var i = 0;
				var content = data.content;
				// replace all works
				$.each($('.worksItem'), function() {
					if (i < content.length) {
						content[i].img = 'http://192.168.1.102/horizoner.net/public' + content[i].img.substr(content[i].img.indexOf('/'))
						$(this).find('img').attr('src', content[i].img);
						$(this).find('h3').text(content[i].name);
						$(this).find('p').text(content[i].info);
						$('#worksLastId').val(content[i].id)
					}
					i++;
				});
				$('#worksFirstPageId').val(content[i - 1].id);
			}
		}, 'json');
 	})();*/
});