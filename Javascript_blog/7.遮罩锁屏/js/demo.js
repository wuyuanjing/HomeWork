/**
 * Created by ThinkPad on 2018/5/9.
 */
window.onload = function () {
    //在前台new 出一个对象
    var $ = function (_this) {
        return new Base(_this);
    };

    //获取member元素,当鼠标移入到个人中心上面，让下拉列表显示，当鼠标移出到个人中心，让下拉列表消失
    $().getClass("member").hover(function(){
        // $().getClass("member").css("background","url('img/arrow2.png') no-repeat 55px center");
        $(this).css("background","url('img/arrow2.png') no-repeat 55px center");

        $().getClass("member_ul").show();
    },function(){
        // $().getClass("member").css("background","url('img/arrow.png') no-repeat 55px center")
        $(this).css("background","url('img/arrow.png') no-repeat 55px center")
        $().getClass("member_ul").hide();
    });

    //设置登录框居中效果
    var login = $().getId("login")
    var screen =  $().getId("screen");
    login.center(350,250).resize(function () {
        login.center(350,250);
        if(login.css("display") == "block"){
            screen.lock();
        }
    });

    //设置登录框关闭效果
    $().getClass("close").click(function () {
        login.hide();
        screen.unlock();
    });

    //设置登录框弹出效果
    $().getClass("login").click(function () {
        login.show();
        //遮罩锁屏效果
        screen.lock();
    });

};





