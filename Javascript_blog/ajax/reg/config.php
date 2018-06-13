<?php
/**
 * Created by PhpStorm.
 * User: ThinkPad
 * Date: 2018/5/24
 * Time: 14:29
 */

define("DB_HOST","localhost");
define("DB_USER","root");
define("DB_PASSWORD","asdqwe123");
define("DB_NAME","blog_project");
//第一步连接数据库
$conn = mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);
if(!$conn){
    die("数据库连接失败".mysqli_error());
}
//第二步选择所需要的数据库
mysqli_select_db($conn,DB_NAME);
// 设置编码，防止中文乱码
mysqli_query($conn , "set names utf8");


?>