<?php
/**
 * Created by PhpStorm.
 * User: ThinkPad
 * Date: 2018/5/24
 * Time: 15:21
 */
require "config.php";

//接收前台传递过来的用户名
$user = @$_POST["user"];
//第二步选择所需要的数据库
mysqli_select_db($conn,DB_NAME);

//在新增之前，要判断用户名是否重复
$query = mysqli_query($conn,"SELECT user FROM reg WHERE user='$user'");
if(mysqli_fetch_array($query,MYSQLI_ASSOC)){
    echo "1";
}else{
    echo "2";
}

//关闭数据库
mysqli_close($conn);


?>