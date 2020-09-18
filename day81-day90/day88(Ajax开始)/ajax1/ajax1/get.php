<?php
$name = $_GET['name'];
$age = $_GET['age'];

// 在php中echo的内容会被ajax接收(使用echo给前端发送数据)
echo '姓名：'.$name.'年龄：'.$age;
?>