<?php
/**
 * Created by PhpStorm.
 * User: ThinkPad
 * Date: 2018/5/24
 * Time: 14:32
 */
require "config.php";

//接收前台传递过来的用户名
$user = @$_POST["user"];
//接收前台传递进来的密码
$pass = @sha1($_POST["pass"]);

//将传递过来的用户名和密码写入到数据库里面
//第一步：创建一个变量，用来保存要插入的数据
$query = "INSERT INTO reg (id,user,pass) VALUES (null,'$user','$pass')";
//第二步，将要插入的数据发送到mysql服务器
$result = mysqli_query($conn,$query);
//第三步，做判断
if(!$result){
    echo "数据插入失败";
}else{
    echo "1";
}



//关闭数据库
mysqli_close($conn);


?>