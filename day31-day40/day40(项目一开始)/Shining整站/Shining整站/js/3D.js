 var lis = $(".list>li");
 var play_n = $(".play_n");
 var play_h = $(".play_h");
 var b_img = $(".b_img");
 var show_3D = $(".show_3D");
 var stop = $(".stop");
 //play 按键变色
 $(lis).hover(function(){
 	$(this).find(play_n).css("display","none");
 	$(this).find(play_h).css("display","block");
 },function(){
 	$(this).find(play_n).css("display","block");
 	$(this).find(play_h).css("display","none");
 });
 
 //点击更改图片
 $(lis).on("click",function(){
 	var clone_img = $(this).find(b_img).clone().addClass("show_3D_img");
 	$(show_3D).empty().append(clone_img).append(stop);
 });
