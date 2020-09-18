<?php
// 定义数组
// 索引数组
$arr1 = array(233, 666, 888);
// 键值对数组 key value
$arr2 = array('name'=>'dyx', 'age'=>18);

// echo $arr1[0];
// echo $arr2['name'];

// 输出数组
// print_r($arr1);
// 获取数组长度
// echo count($arr1);
// 检查数组中是否包含某个值
// var_dump(in_array(233, $arr1));

// 遍历数组
for($i = 0;$i < count($arr1);$i++){
	// echo $arr1[$i].'<br>';
}

foreach($arr2 as $key=>$value){
	// echo $key.'<br>';
	// echo $value.'<br>';
}

// 字符串分割为数组
$str = 'name=dyx&age=18';
$a = explode('&', $str);
// print_r($a);

// 数组分割为字符串
$arr = array('a','b','c','d');
// echo implode('', $arr);

// 引入文件
// include('public.php');
// 引入一次(已经引入不会再重复引入)
include_once('public.php');

// 引入文件
// require('public.php');
// 引入一次(已经引入不会再重复引入)
// require_once('public.php');

// 区别：include报错不会影响后面代码执行 require会影响后面代码执行

echo 'hello';


// 函数
function test($x, $y){	
	echo $x.'<br>';
	echo $y;
}

test('hello', 'world');

?>
