<?php
// 引入连接数据库的文件
include_once('connect.php');

// 接受前端传过来的数据
$username = $_POST['username'];
$userage = $_POST['userage'];

// 输出拿到的数据测试是否传递成功
// echo $username,$userage;

// 把数据存入数据库中
// 插入数据的sql语句
$sql = "insert into person (name, age) values ('$username','$userage')";

// 执行sql语句
mysqli_query($con, $sql);

// 判断是否插入成功
if(mysqli_affected_rows($con) > 0){
	echo "<script>
		location.href = 'http://localhost:8080/php4/form.html';
		alert('保存成功');
	</script>";
}else{
	echo "<script>
		location.href = 'http://localhost:8080/php4/form.html';
		alert('保存失败');
	</script>";
}

?>