<?php
/**
 * Created by PhpStorm.
 * User: ThinkPad
 * Date: 2018/5/24
 * Time: 16:53
 */
require "config.php";

$query = mysqli_query($conn,"SELECT small_bg, big_bg, bg_color FROM skin");

$json = '';



/*while (!!$row = mysqli_fetch_array($query, MYSQLI_ASSOC)) {
    $json .= json_encode($row).',';
    echo $json;
}*/

$json = '';

while (!!$row = mysqli_fetch_array($query, MYSQLI_ASSOC)) {
    $json .= json_encode($row).',';
}

echo '['.substr($json, 0 , strlen($json) - 1).']';

mysqli_close($conn);


?>