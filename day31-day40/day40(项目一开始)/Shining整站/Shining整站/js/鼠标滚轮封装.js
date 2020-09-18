function  addScrollEvent(obj,handle) {
	     //obj代表是将来调用函数的时候 传递来的标签 （需要把滚轮事件绑定到此标签上）
	     //handle就是将来调用的回调函数
	    var isFF = navigator.userAgent.indexOf("Firefox");
		 if (isFF != -1) {
		    obj.addEventListener("DOMMouseScroll",scrollFun ,false)
		 } else{
		 	obj.onmousewheel = scrollFun;
       }
   function scrollFun (event) {
     var ev = event || window.event;
      var down;
      if (isFF != -1) {
	  down = ev.detail > 0;
      } else{
	   down = ev.wheelDelta < 0;//标准浏览器向上
       }
       handle(down);
      }
    }