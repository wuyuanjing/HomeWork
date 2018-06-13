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
        login.center(350,250);
        login.hide();
        screen.unlock();
        //鼠标释放时触发(放开鼠标)
        if (login.releaseCapture) {
            login.releaseCapture();
        }
        document.documentElement.style.overflow = "auto";
    });

    //设置登录框弹出效果
    $().getClass("login").click(function () {
        login.show();
        //遮罩锁屏效果
        screen.lock();
        //鼠标锁住时触发(点击住)
        if (login.setCapture) {
            login.setCapture();
        }
        document.documentElement.style.overflow = "hidden";
    });

    //调用拖拽效果
    $().getId("demo1").drop();
    $().getId("login").drop();

};





