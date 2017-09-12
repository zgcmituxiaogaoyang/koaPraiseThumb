<?php
$con=mysqli_connect("localhost","root","","thumb_num"); //连接数据库
// 检查连接 
if (!$con)
{ 
    die("连接错误: " . mysqli_connect_error()); 
} 

$sql="UPDATE `numbers` SET `num`=num+1 WHERE `id`=1";//将点赞次数更新进数据库
$result=mysqli_query($con,$sql);
if($result>0){
	echo json_encode(array('success'=>true,'message'=>'数据库更新成功'));
}else{
	echo json_encode(array('error'=>false,'message'=>'数据库更新失败'));
}
mysqli_close($con);
?>