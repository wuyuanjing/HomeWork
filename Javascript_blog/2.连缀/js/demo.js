/**
 * Created by ThinkPad on 2018/5/9.
 */
window.onload = function () {
	
    //在前台new 出一个对象
    var $ = function () {
        return new Base();      
    };

    $().getId("box").css("width","100px").css("height","200px").css("background","red").html("首页").click(function () {
        $().getId("box").css("background","yellow");
    })



};








 


// $("#box").css("color","red").css("background","yellow");

// alert($().getId("box").css("background","yellow"));
// alert($().getId("box"));

// $().getId("box").css("background","purple");
// $().getName("user").css("fontSize","30px");
/* $().getTagName("p").css("background","red").css("fontSize","30px").css("color","#fff").html("hello world").click(function () {
 alert("1111");
 });*/

// alert($().getTagName("p").css("background","red"))