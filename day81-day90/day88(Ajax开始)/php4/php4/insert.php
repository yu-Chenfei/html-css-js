<?php
include('connect.php');

// 插入语句
mysqli_query($con, "insert into person (name, age) values ('李莹莹', 19)");

// 判断插入语句是否成功
if(mysqli_affected_rows($con) > 0){
	echo '插入成功：'.mysqli_affected_rows($con).'条id为'.mysqli_insert_id($con);
}
 
 
?>