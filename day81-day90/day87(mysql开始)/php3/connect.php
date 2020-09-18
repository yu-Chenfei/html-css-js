<?php
	// 防止输出到浏览器 中文乱码
	header('content-type:text/html;charset=utf-8');
	// 连接数据库
	// 参数：1.localhost 2.账号 3.密码 4.数据库名
	$con = mysqli_connect('localhost','root','','test');
	// 判断是否连接成功
	if(!$con){
		// die方法：输出字符串并终止当前脚本
		// mysqli_connect_error方法：输出连接错误
		die('数据库连接失败'.mysqli_connect_error());
	}
	
	// 常用sql语句(对数据库进行操作的语句,包括增删改查设置编码格式等)：
	// 设置编码格式
	$utf8Sql = "SET NAMES utf8";
	// 执行sql语句 mysqli_query($con, sql语句)
	mysqli_query($con, $utf8Sql);
	
	// 插入语句
	// $insertSql = "INSERT INTO person (name, age) VALUES ('dyx', '18')";
	$insertSql = "INSERT INTO person (name, age) VALUES ('旺宝', 20) ,('森宝', 30)";
	// 执行插入语句
	mysqli_query($con, $insertSql);
	
	// mysqli_affected_rows()函数用于获取前一次 MySQL 操作所影响的记录数
	if(mysqli_affected_rows($con) > 0){
		echo '插入成功：'.mysqli_affected_rows($con).'条数据';
	}

?>