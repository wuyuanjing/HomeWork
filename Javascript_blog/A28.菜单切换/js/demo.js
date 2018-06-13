/**
 * Created by ThinkPad on 2018/5/9.
 */

//等待页面所有DOM元素加载完毕之后再执行
$(function () {
    //获取member元素,当鼠标移入到个人中心上面，让下拉列表显示，当鼠标移出到个人中心，让下拉列表消失
    $(".member").hover(function(){
        $(this).css("background","url('img/arrow2.png') no-repeat 55px center");
        $(".member_ul").show().animate({
            mul : {
                h : 100,
                o : 100
            }
        });
    },function(){
        $(this).css("background","url('img/arrow.png') no-repeat 55px center")
        $(".member_ul").animate({
            mul : {
                h : 0,
                o : 0
            },
            fn : function () {
                $(".member_ul").hide();
            }
        });
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
        screen.animate({
            attr : "o",
            target : 0,
            step :2,
            t : 30,
            fn : function () {
                screen.unlock();
            }
        });
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
        screen.lock().animate({
            attr : "o",
            target : 30,
            step :2,
            t : 30
        });
        //鼠标锁住时触发(点击住)
        if (login.setCapture) {
            login.setCapture();
        }
        document.documentElement.style.overflow = "hidden";
    });

    //调用拖拽效果
    $("#login").drop();


    //设置百度分享侧边栏效果
    $("#share").hover(function () {
        $(this).animate({
            attr : "x",
            target : 0,
            t : 30,
            step :10
        })
    },function () {
        $(this).animate({
            attr : "x",
            target : -211,
            t:30,
            step : 10
        })
    });

    //设置百度分享侧边栏浏览器打开之后的默认位置位置
    $("#share").css("top",(getInner().height - parseInt($("#share").css("height"))) / 2 + "px");

    //设置当滚动条在滚动的时候，给百度分享侧边栏添加的滚动效果
    addEvent(window,"scroll",function () {
        $("#share").animate({
            attr : "y",
            target : getScroll().top + (getInner().height - parseInt($("#share").css("height"))) / 2
        })
    });
    
    //设置百度分享侧边栏图片位置
    var oShare = document.getElementById("share");
    var oUl = oShare.getElementsByTagName("ul")[0];
    var oA = oUl.getElementsByTagName("a");
    var s = 5;
    var n = -30;
    for(var i =0; i< oA.length;i++ ){
        oA[i].style.backgroundPosition = "5px "+ s +"px";
        s = s + n;
    };

    //设置导航栏滑动效果
    $("#nav .about li").hover(function () {
         var target = $(this).first().offsetLeft;
         $("#nav .nav_bg").animate({
             attr : "x",
             target : target + 20,
             t : 30,
             step : 10,
             fn : function () {
                $("#nav .white").animate({
                    attr : "x",
                    target : - target
                })
             }
         });
    },function () {
        $("#nav .nav_bg").animate({
            attr : "x",
            target : 20,
            t : 30,
            step : 10,
            fn : function () {
                $("#nav .white").animate({
                    attr : "x",
                    target : 0
                })
            }
        });
    });


    //设置左侧菜单效果
    $(".sidebar h2").toggle(function () {
        $(this).next().animate({
            mul : {
                h : 0,
                o : 0
            }
        })
    },function () {
        $(this).next().animate({
            mul : {
                h :150,
                o : 100
            }
        })
    });

   
});







