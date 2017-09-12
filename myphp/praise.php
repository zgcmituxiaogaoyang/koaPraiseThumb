<?php
$num=$_REQUEST['num'];//获取点赞的次数
$con=mysqli_connect("localhost","root","","thumb_num"); //连接数据库
// 检查连接 
if (!$con)
{ 
    die("连接错误: " . mysqli_connect_error()); 
} 

$sql="UPDATE `numbers` SET `num`=$num WHERE `id`=1";//将点赞次数更新进数据库
$result=mysqli_query($con,$sql);
if(!$result){
	echo "数据更新失败！";
}else{
	echo "数据更新成功！";
}
mysqli_close($con);
?>