define(function (require, exports, module) {
	(function(){
	    $(".aboutBack").hide();
	    $(".aboutLoad").hide();
		$(".aboutMore").click(function() {
		    $.ajax({
		        type:"post",
		        data:{"changeId": $("#aboutLastId").val(),"changeId2": "1"},
		        url:"getAboutMore.php",
		        dataType:"json",
		        success:function(data){
		            $(".aboutMore").show();
		            $(".aboutBack").show();
		            $(".aboutLoad").hide();
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
		        beforeSend: function() {
		        	$(".aboutLoad").show();
		        	$(".aboutMore").hide();
		            $(".aboutBack").hide();
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
		        data:{"changeId": $("#aboutLastId").val(),"changeId2": "2","changeId3": $("#aboutpreId").val()},
		        url:"getPreMore.php",
		        dataType:"json",
		        success:function(data){
		            $(".aboutMore").show();
		            $(".aboutBack").show();
		            $(".aboutLoad").hide();
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
							    $(".aboutBack").hide();
							};
							i++;
		                };
		            });
		        },
		        beforeSend: function() {
		        	$(".aboutLoad").show();
		        	$(".aboutMore").hide();
		            $(".aboutBack").hide();
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