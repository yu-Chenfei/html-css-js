<?php
header("Content-type:text/html;charset=utf-8");

// 连接数据库
$con = mysqli_connect('localhost', 'root', '' ,'test');

// 判断是否连接成功
if(!$con){
	die('连接失败');
}

// 设置编码格式
mysqli_query($con, "set names utf8");
?>