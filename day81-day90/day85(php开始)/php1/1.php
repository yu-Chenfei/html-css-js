<?php
	// 如何打开php文件：在浏览器地址栏输入 
	// localhost或者127.0.0.1(相当于www文件夹)/文件路径
	
	// 定义变量 $变量名 = 变量值;
	// 使用变量 $变量名
	$num1 = 20;
	$num2 = 1.5;
	$str = 'hello world';
	$bool = true;
	$arr = Array(1, 4, 10);
	$test = function(){};
	$x = null;
	
	// gettype($num1) 返回数据类型
	// echo gettype($num1); // integer
	// echo gettype($num2); // double
	// echo gettype($str); // string
	// echo gettype($bool); // boolean
	// echo gettype($arr); // array
	// echo gettype($test); // object
	// echo gettype($x); // NULL
	
	// is_type() 判断是否是某数据类型 返回值是布尔值
	// echo is_array($arr); // 1(true)
	// var_dump(is_array($arr)); // bool(true)
	
	// var_dump输出变量详细信息
	// var_dump($num1);
	
	// 正常赋值
	// $n1 = 10;
	// $n2 = $n1;
	// $n2 = 20;
	// echo $n1; // 10
	
	// 引用赋值 指向同一块内存地址
	$n1 = 10;
	$n2 = &$n1;
	$n2 = 20;
	// echo $n1;
	
	// 变量的变量
	$a = 'x';
	$$a = 'hello';
	// echo $x;
	
	// 超全局变量
	// $_SERVER 服务器信息
	// 输出数组使用print_r
	// print_r($_SERVER['HTTP_HOST']);
	
	// $_GET $_POST get请求和post请求传过来的参数信息
	// $name = $_GET['user'];
	// $pass = $_GET['pass'];
	
	$name = $_POST['user'];
	$pass = $_POST['pass'];
	
	echo $name,$pass;
	
	
	// echo输出 
	// echo $num;
	
	
?>