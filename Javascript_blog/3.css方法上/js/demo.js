/**
 * Created by ThinkPad on 2018/5/9.
 */
window.onload = function () {
    //在前台new 出一个对象
    var $ = function () {
        return new Base();
    };

    // $().getTagName("p").css("background","yellow");

    $().getClass("box1","demo2").css("background","green").css("fontSize","30px");

    // alert($("#box").css("width"));
// alert($().getId("box").css("width"));
// alert($().getId("box").css("height"));


//给元素设置内容
//     alert($().getTagName("p").html());
//     alert($().getId("box").html())

};







/*  $().getId("box").style.background = "red";
 alert($().getName("sex")[0].value);
 $().getTagName("p")[0].style.background = "yellow";
 */


// $("#box").css("color","red").css("background","yellow");

// alert($().getId("box").css("background","yellow"));
// alert($().getId("box"));

// $().getId("box").css("background","purple");
// $().getName("user").css("fontSize","30px");
/* $().getTagName("p").css("background","red").css("fontSize","30px").css("color","#fff").html("hello world").click(function () {
 alert("1111");
 });*/
// alert($().getTagName("p").css("background","red"))