  var content = $(".Bim_content");
  //var top = $(content).scrollTop();
  
  addScrollEvent(document,function(down){
  	if(down == true){
       $(content).animate({
       	top:"+=10"
       },1000);
  	}else{
        $(content).animate({
       	top:"-=10"
       },1000);
  	}
  });