/**
 * Created by ThinkPad on 2018/5/9.
 */
window.onload = function () {
    //在前台new 出一个对象
    var $ = function () {
        return new Base();
    };

    $().getId("box1").addClass("a").addClass("b").addClass("c").removeClass("a").removeClass("c");


};





