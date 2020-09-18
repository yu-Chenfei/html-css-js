	    var figure = $("figure");
	    var space = $(".space");
	    var hasColor = $(".hasColor");
	    var noColor = $(".noColor");
	    var footer = $("footer");

	    //图片效果
	    $(figure).hover(function(){
	    	   $(this).find(space).css("background","rgb(207,219,0)");
	    	   $(this).find(noColor).css("display","none");
	    	   $(this).find(hasColor).css("display","inline-block");
	    },
	    function(){
	    	   $(this).find(space).css("background","rgb(204,204,204)");
	    	   $(this).find(noColor).css("display","inline-block");
	    	   $(this).find(hasColor).css("display","none");
	    });
