// 定义一个变量作为每行的图片个数
var pic_num = 2;
// 定义一个变量作为关数
var level = 1;
var levelName = ['第一关: 水星', '第二关: 木星', '第三关：天王星', '第四关：土星', '第五关：金星', '第六关：地球', '第七关：冥王星', '第八关：海王星'];
// 每一关名称的数组
var levelDisArray = ['像初恋一样手感的双2.5D弧面玻璃','帮助你防火防盗防女友的眼球识别加密系统','帮你省下单反的1300万像素镜头','促进多巴胺的HI-FI音质耳放','可以自动区分女汉子和男妹子的知性美颜系统','快得能让时间变慢的八核1.7GHz处理器','轻松抓拍多动症患者的PDAF快速相位对焦系统','duang duang daung效果的Funtouch OS系统'];
// 定义取随机整数的函数
function randNum(min, max){
	return parseInt(Math.random() * (max - min + 1) - min);
}
// 徐峥的索引
var picIndex = 0;

// 中奖信息的数组
var prize_info = ['你没有抽中奖品,再玩一次吧','vivo X50pro一台','带薪年假一次','乔文广使用一晚','陈老板半裸写真一套','所有奖品都来一样','你没有找齐徐峥的八个分身'];

// 创造头像的函数
function createPicFun(){
	// 计算头像的总个数
	var pic_count = pic_num * pic_num;
	// 循环创建头像
	for(var i = 0;i < pic_count;i++){
		// 创建头像
		var myPic = $('<div><img src="img/baobei.png"></div>');
		// 设置头像宽度和高度
		myPic.css({'height': $('.show>div').width() / pic_num + 'px','width': $('.show>div').width() / pic_num + 'px'});
		// 再把创建的头像放在show里面的div里
		$('.show>div').append(myPic);
	}
	// 随机索引 换成徐峥的图片
	picIndex = randNum(0, pic_count - 1);
	// 改变图片路径
	$('.show img').eq(picIndex).attr('src', 'img/xuzheng.png');
	// 给徐峥添加点击事件 点击后进入下一关
	$('.show img').eq(picIndex).on('click', function(){
		setTimeout(function(){
			// 过关画面隐藏
			$('.black_div').css('display', 'none');
			// 8关过后显示合体手机
			if(level == 8){
				successFun();
				return false;
			}
			// 点击后level加1
			level++;
			// 更换每一关名称
			$('.main h2').html(levelName[level-1]);
			// 每次清空div
			$('.show div').empty();
			// 第五关和第七关不增加头像
			if(level != 5 && level != 7){
				// 图片个数增加一行
				pic_num++;
			}
			// 重新调用函数
			createPicFun();
			
			// 第五关或者第七关增加铁头
			if(level == 5){
				// 调用添加铁头的方法
				createTieTou(pic_count,4);
			}else if(level == 7){
				// 调用添加铁头的方法
				createTieTou(pic_count,5);
			}
		},1000);
		// 显示过关画面的函数
		levelUpFun(level);
	});
}
createPicFun();

// 添加铁头的函数
function createTieTou(count,num){
	// 定义数组存放铁头的索引
	var tieArray = [];
	// while循环判断 直到数组长度等于num
	while(tieArray.length != num){
		// 循环随机索引
		var tieIndex = randNum(0, count-1);
		// 判断索引不能重复并且不能等于徐峥的索引
		if(tieIndex != picIndex && tieArray.indexOf(tieIndex) == -1){
			tieArray.push(tieIndex);
		}	
	}
	// 循环遍历铁头索引数组
	for(var i = 0;i < tieArray.length;i++){
		$('.show img').eq(tieArray[i]).attr('src', 'img/tietou.png');
	}
}

	// 显示过关画面的函数
	function levelUpFun(level){
		// 过关画面显示
		$('.black_div').css('display', 'block');
		// 画面题目
		$('.black_div span').html('你获得'+level+'/8碎片');
		// 改变画面描述
		$('.black_div p').html(levelDisArray[level - 1]);
		if(level >= 6){
			// 碎片变化(雪碧图)
			$('.level_up div').css('background-position', -100 * (level - 6)+'% -100%');
		}else{
			// 碎片变化(雪碧图)
			$('.level_up div').css('background-position', -100 * (level -1)+'% 0%');
		}	
	}
	
	// 展示合体后(成功)手机的函数
	function successFun(){
		// 展示合体后手机
		$('.success_div').css('display', 'block').siblings().css('display', 'none');
		// 更换星空背景
		$('.main').css('background-image', 'url(img/word_bg.jpg)');
		// 给开始抽奖按钮绑定点击事件
		$('.get_prize').on('click', function(){
			// 取随机数
			var index = randNum(0,5);
			// 调用是否中奖的方法
			isGetPrize(index);
		});
	}
	
	
	// 是否中奖的方法
	function isGetPrize(index){
		// index=6失败(时间到了) index=0没中奖  其他是中奖
		
		// 成功或者失败的框显示 其他隐藏
		$('.black_div').css('display', 'block').siblings().css('display', 'none');
		$('.black_div .level_up').css('display', 'none');
		
		if(index == 6 || index == 0){
			// 失败或者没抽到奖 背景图片不一样
			$('.is_prize img').attr('src', 'img/xuzheng_kuang.png');
			$('.is_prize h3').css('display', 'block');
			$('.is_prize h4').css('display', 'none');
			// 没抽到奖
			if(index == 0){
				$('.reset_game').css('display', 'inline-block').siblings('.person_info').css('display', 'none');
			}
			// 失败
			if(index == 6){
				$('.again_game').css('display', 'inline-block').siblings('.person_info').css('display', 'none');
			}
		}
		
		// 显示p里面的文字
		$('.is_prize>p').html(prize_info[index]);
	}