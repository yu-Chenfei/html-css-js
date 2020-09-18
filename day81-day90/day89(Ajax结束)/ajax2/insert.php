<?php
// 引入连接文件
include_once('connect.php');
// 获取前端传过来的数据
$username = $_GET['username'];
$userage = $_GET['userage'];

// 写一个插入数据的sql语句并执行
$insertSql = "insert into person (name, age) values ('$username', '$userage')";

mysqli_query($con ,$insertSql);

// 判断是否成功
if(mysqli_affected_rows($con) > 0){
	echo '保存成功';
}else{
	echo '保存失败';
}

?>