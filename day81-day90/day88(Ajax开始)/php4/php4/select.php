<?php 
include('connect.php');
// 修改数据
$upSql = "update person set age=20,name='杨志森' where name='森宝'";

// 执行sql语句
mysqli_query($con ,$upSql);

// 删除数据
$delSql = "delete from person where name='杨志森'";

// 执行sql语句
mysqli_query($con ,$delSql);

// **********************

// 查询语句 "select 字段名(*代表全部字段) from 数据表名 where 条件";
$sql = "select * from person";

// 查询条件中使用比较运算符 <>不等于 其他和js相同
// 可以使用逻辑运算符 or and not
// $sql = "select * from person where age <> 20 and age > 18";

// in 匹配括号中的项
// $sql = "select * from person where age in (20, 19)";
// $sql = "select * from person where age not in (20, 19)";

// like 模糊查询 _代表一个字符 %代表任意长度字符
// $sql = "select * from person where name like '_宝'";
// $sql = "select * from person where name like '%莹%'";

// limit 限制查询条数
// 一个值情况 是查询条数
// 两个值情况 第一个是查询索引位置 第二个值是查询条数
// $sql = "select * from person limit 2,2";
// $sql = "select * from person where name like '_宝' limit 1";

// order by排序查询 ASC正序 DESC倒序
// $sql = "select * from person order by age DESC";

// 执行sql语句
$result = mysqli_query($con, $sql);

// 判断是否查询成功 mysqli_num_rows($result)返回查询的记录数
if(mysqli_num_rows($result) > 0){
	// 定义一个数组
	$arr = array();
	// echo "查询成功：".mysqli_num_rows($result)."条";
	
	// mysqli_fetch_assoc($result) 返回一条key=>value形式数据
	// mysqli_fetch_row($result) 返回一条索引数组形式数据
	// mysqli_fetch_array($result) 返回一条包含索引和key=>value形式数据
	// 使用while循环赋值 直到null为止
	while($row = mysqli_fetch_assoc($result)){
		// 数组名[] = 值 相当于js中的push
		$arr[] = $row;
	}
	print_r($arr);
}

// 释放结果集
mysqli_free_result($result);

// 关闭数据库连接
mysqli_close($con);
?>