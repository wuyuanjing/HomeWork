/**
 * Created by ThinkPad on 2018/5/9.
 */

//等待页面所有DOM元素加载完毕之后再执行
$(function () {
    //获取member元素,当鼠标移入到个人中心上面，让下拉列表显示，当鼠标移出到个人中心，让下拉列表消失
    $(".member").hover(function(){
        $(this).css("background","url('img/arrow2.png') no-repeat 55px center");
        $(".member_ul").show();
    },function(){
        $(this).css("background","url('img/arrow.png') no-repeat 55px center")
        $(".member_ul").hide();
    });
    //设置登录框居中效果
    var login = $("#login");
    var screen =  $("#screen");
    login.center(350,250).resize(function () {
        login.center(350,250);
        if(login.css("display") == "block"){
            screen.lock();
        }
    });

    //设置登录框关闭效果
    $(".close").click(function () {
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
    $(".login").click(function () {
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
    $("#login").drop();

    $("p").eq()
});







