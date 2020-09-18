(function(){
	// loading页面初始化函数
	function loadingInit(){
		// 图片预加载
		// 定义图片数组
		var imgArray = ['img/loading_bg.png','img/loading_xuzheng.png','img/loading_txt.png','img/star2.png','img/star4.png','img/star3.png','img/star2.png','img/star4.png','img/star5.png','img/super_body1.png','img/super_head.png','img/super_glasses.png'];
		// 定义一个变量计数(图片加载的个数)
		var imgCount = 0;
		// 循环遍历数组
		for(var i = 0;i < imgArray.length;i++){
			// 创建一个图片对象
			var myImage = new Image();
			// 使用onload方法判断图片是否加载完毕
			myImage.onload = function(){
				imgCount++;
				if(imgCount == imgArray.length){
					// 跳转到下一页
					wordInit();
				}
			}
			// 给图片对象src属性赋值
			myImage.src = imgArray[i];
		}
	}
	
	// word页面的初始化函数
	function wordInit(){
		// loading页面隐藏
		// $('.load_div').css('display', 'none');
		// word页面显示 其他同级都隐藏
		$('.word_div').css('display', 'block').siblings().css('display', 'none');
		// 定义文字数组
		var wordArray = ["公元9025年", "外星人为了争夺", "封印在vivo手机中的神秘力量",'发起宇宙战乱','超人徐峥为了保卫神秘能量','带着手机来到浩瀚宇宙中','分身成为8个自己','分别保卫8快手机碎片','消失在太阳系的八大行星中','据说找齐徐峥的8个分身','就能启动神秘能量保护地球','…'];
		// 定义一个变量作为数组索引
		var wordIndex = 0;
		// 使用定时器向div中添加文字
		var wordTimer = setInterval(function(){	
			// 向div中添加p标签
			$('.word_div div').append('<p>'+wordArray[wordIndex]+'</p>');
			// 一旦索引到最后一个 清除定时器
			if(wordIndex == wordArray.length - 1){
				clearInterval(wordTimer);
				// 跳转到下一个页面
				surperInit();
			}
			// 索引++
			wordIndex++;
		},600);
	}
	
	// 初始化surper页面的方法
	function surperInit(){
		// surper页面显示 其他同级都隐藏
		$('.surper_div').css('display', 'block').siblings().css('display', 'none');
		// 定义一个变量计数
		var superNum = 1;
		// 使用定时器更改图片路径 让斗篷动起来
		var surperTimer = setInterval(function(){
			// 判断数字大于3的时候回到1
			if(superNum == 4){
				superNum = 1;
			}
			// 设置图片路径
			$('.surper_body').attr('src', 'img/super_body'+superNum+'.png');
			// 每次让计数加1
			superNum++;
		},800);
		
		// 4s后展示下一个页面
		setTimeout(function(){
			//清除定时器
			clearInterval(surperTimer);
			surperTimer = null;
			
			// 跳到下一个页面
		},4200)
	}
	
	// 调用第一个页面的初始化函数
	setTimeout(loadingInit,1000);
	
	
})();