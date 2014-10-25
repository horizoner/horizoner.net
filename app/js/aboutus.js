define(function (require, exports, module) {
	(function(){
	    $(".aboutBack").hide();
		$(".aboutMore").click(function() {
		    $.ajax({
		        type:"post",
		        data:{"changeId": $("#aboutLastId").val()},
		        url:"getAboutMore.php",
		        dataType:"json",
		        success:function(data){
		            $(".aboutMore").show();
		            $(".aboutBack").show();
		            var i = 0;
		            $.each($(".aboutHead"),function(){
		            	if (i < data.content.length) {
		                    $(this).find("img").attr("src", data.content[i].img);
							$(this).find(".aboutName").text(data.content[i].aboutName);
							$(this).find(".aboutEdu").text(data.content[i].aboutEdu);
							$(this).find(".aboutDire").text(data.content[i].aboutDire);
							$(this).find(".aboutCompany").text(data.content[i].aboutCompany);
							$("#aboutLastId").val(data.content[i].id);
							i++;
		                };
		            });
		        },
		        error: function(data) {
                        if (data != null) {
					    alert("请求错误！");
                        };
                }

		    });
		});

		$(".aboutBack").click(function() {
		    $.ajax({
		        type:"post",
		        data:{"changeId2": $("#aboutpreId").val()},
		        url:"getPreMore.php",
		        dataType:"json",
		        success:function(data){
		            $(".aboutMore").show();
		            $(".aboutBack").show();
		            var i = 0;
		            $.each($(".aboutHead"),function(){
		            	if (i < data.content.length) {
		                    $(this).find("img").attr("src", data.content[i].img);
							$(this).find(".aboutName").text(data.content[i].aboutName);
							$(this).find(".aboutEdu").text(data.content[i].aboutEdu);
							$(this).find(".aboutDire").text(data.content[i].aboutDire);
							$(this).find(".aboutCompany").text(data.content[i].aboutCompany);
							$("#aboutpreId").val(data.content[i].id);
							if ($("#aboutpreId").val() == 0) {
							    $(".aboutMore").hide();
							};
							i++;
		                };
		            });
		        },
		        error: function(data) {
                        if (data != null) {
					    alert("请求错误！");
                        };
                }

		    });
		});
	})()
})