/**
 * Created by ThinkPad on 2018/5/14.
 */

window.onload = function () {
    //在前台new出一个对象
    var $ = function (args) {
        return new Base(args);
    };

    // $("p").find("em").css("color","red");
    // $("p").find("em").find("strong").css("color","yellow");

    /*$(".box p .a").css("color","red");*/
    $(".box").click(function () {
        $(this).css("background","red").html("首页").css("color","#fff").css("fontSize","30px")
    })
};




