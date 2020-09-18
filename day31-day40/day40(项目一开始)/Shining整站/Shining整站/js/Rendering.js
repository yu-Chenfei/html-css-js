  var btns = $(".list>li");
  var showImg = $(".show>img");
  var scrollDiv = $(".show");
  var timer;
  
btns.eq(0).css("background","yellow");
var index = 0;
function move(){
	timer = setInterval(function(){
	index++;
	if(index == 3){
	   index = 0;
	}
	$(showImg).eq(index).attr("id","showImg").siblings().removeAttr("id");
	btns.eq(index).css("background","yellow").siblings().css("background","gray");
},3000);
}
   move();
  
  $(btns).on("click",function(){
	$(this).css("background","yellow").siblings().css("background","#808080");
	$(showImg).eq($(this).index()).attr("id","showImg").siblings().removeAttr("id");
});

  var wrap = document.getElementById("wrap");
  var ulArray = wrap.getElementsByTagName("ul");
  var count = 0;
  
  function scroll(){
			for(var i = 0;i < 30;i++){
			count++
			var lis = document.createElement("li");
			var imgs = document.createElement("img");
			imgs.className = "imgs"
			lis.className = "liArray"
			imgs.src = "img/rd" + count + ".jpg";
			lis.appendChild(imgs);
			
			var minUl = ulArray[0];
			for(var j = 0;j < ulArray.length;j++){
				if(minUl.offsetHeight > ulArray[j].offsetHeight){
					minUl = ulArray[j];
				}
			}
			minUl.appendChild(lis);
			var height = parseInt(Math.random() * 50 + 230);
			imgs.style.height = height + "px";
		 }
		}
		scroll();
		
    var imgArray = $(".imgs");
    var fixedDiv = $(".fixedDiv");
    var liArray = $(".liArray");
    var big = $(".changeBig");
    var b_img = $(".backgroundDiv");

    $(liArray).on("click",function(){
    	  var cloneImg = $(this).find(imgArray).clone().css({
    	  	"width":"98%",
    	  	"height":"96%",
    	  	"margin-left":"1%",
    	  	"margin-top":"1%",
    	  });
      $(b_img).css("display","block");
    	  $(fixedDiv).css("display","block").empty().append(cloneImg);
    });
    
    $(fixedDiv,b_img).on("click",function(){
    	  $(b_img).css("display","none");
    	  $(fixedDiv).css("display","none");
    }); 
 
      //添加放大镜效果
    $(liArray).hover(function(){
    	 $(big).fadeIn();
    	 $(this).append($(big));
    },function(){
    	 $(big).css("display","none");
    });