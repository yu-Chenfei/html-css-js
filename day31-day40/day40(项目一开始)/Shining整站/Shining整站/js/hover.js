        //图标Hover事件
        var lis = $("#nav_list>li");
        var hasBorder = $(".this_li");
         $(lis).hover(function(){
         	$(this).css({
         		"borderColor":"rgb(123,123,123)"
         	});
         },function(){
            $(this).css({
         		"borderColor":"rgb(27,27,27)"
         	});
         	$(hasBorder).css({
         		"borderColor":"rgb(123,123,123)"
         	});
         });
        //小图标效果
        var aMark = $(".aMark");
	    var noColor_s = $(".noColor_s");
	    var hasColor_s = $(".hasColor_s");
       	 
	    	  $(aMark).hover(function(){
	    	  	$(this).find(noColor_s).css("display","none");
	    	  	$(this).find(hasColor_s).css("display","inline-block");
	    	  },
	    	  function(){
	    	  	$(this).find(hasColor_s).css("display","none"); 
	    	  	$(this).find(noColor_s).css("display","inline-block");
	    	 });