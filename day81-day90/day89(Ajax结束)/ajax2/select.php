<?php
include_once('connect.php');

// 从数据库查找数据 
$selectSql = "select * from person";

$result = mysqli_query($con, $selectSql);

// 判断是否拿到数据
if(mysqli_num_rows($result) > 0){
	while($row = mysqli_fetch_assoc($result)){
		$arr[] = $row;
	}
	// json_encode把数组转化为json形式字符串
	echo json_encode($arr);
}else{
	echo '获取数据失败';
}

?>
