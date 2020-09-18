<?php
// 定义变量 $变量名 = 变量值
// 输出字符串或者数字使用 echo
// $_GET $_POST

// 定义常量：定义之后不再改变的量
define('PI', 3.14);
// define('PI', 3.145);
// echo PI;

// 内置常量
// echo PHP_OS;
// echo PHP_VERSION

// 魔术常量
// 返回当前行
// echo __LINE__;
// 返回文件完整路径
// echo __FILE__;
// 返回当前函数名
// function test(){
// 	echo __FUNCTION__;
// }
// test();


// PHP中的字符串
$name = 'dyx';
// 定义字符串有三种方法： 
// 1.单引号 
$str = 'hello world';
// echo $str;

// 2.双引号: 特殊符号不需要转义 字符串中的变量被变量值替代
//          如果想明确变量结束位置,用花括号把变量名括起来
$str1 = "你好{$name}hello";
// echo $str1;

// 3.定界符: 特殊符号不需要转义 字符串中的变量被变量值替代
//          如果想明确变量结束位置,用花括号把变量名括起来
// 			在定界符里输出html标签比较方便  
//          Eof可以是任意字母
// echo "<a href=\"http://www.baidu.com\">baidu</a>";

$str2 = <<<Eof
	hello world{$name}
	<a href="http://www.baidu.com">baidu</a>
	<script>
	// 	alert(233);
	</script>
Eof;
// echo $str2;

// 使用.拼接字符串
// echo $str.'!!!';

// 输出字符串
// echo 可以输出多个变量 使用逗号隔开
// echo $name,$str;

// print 只能输出单个变量 但是有返回值(true) 
// $bool = print($name);
// echo $bool;

// printf 格式化输出
// %b 二进制输出
// %d 整数输出
// %f 浮点数输出

// printf('%b' ,'10');
// printf('%d' ,'10.7');
// printf('%.2f', '10'); // 保留两位小数

// sprintf格式化 返回值是格式化后的字符串
$str = sprintf('%.2f', 10.3333);
// echo $str;

// 字符串方法
// strstr返回字符串在另一个字符串中位置的其余部分
// 如果不存在这个字符串 返回false
// stristr 和strstr相同 但不区分大小写

// $x = 'a';
// $str = 'hello world';

// var_dump(strstr($str, $x));

// trim去掉字符串两侧的空格 ltrim和rtrim分别去掉左侧右侧空格
// $str = ' hello ';
// echo 'dyx'.trim($str).'dyx';

// 获取字符串长度 strlen
// $str = 'hello';
// echo strlen($str); // 5

// 字符串转化成大写、小写 strtoupper strtolower 
// echo strtoupper($str); // HELLO
// echo strtolower($str); // hello

// 反转字符串 strrev
// echo strrev($str); // olleh

// nl2br把\n转化成br标签
// $str = "hello\nworld";
// echo nl2br($str);

// 删除字符串中的标签
// $str = '<h2>hello world</h2>';
// echo strip_tags($str);

// 把html中的预定字符(包括标签)转化为html实体
$str = "<h2>hello&nbspworld</h2>";
echo htmlspecialchars($str);

?>
