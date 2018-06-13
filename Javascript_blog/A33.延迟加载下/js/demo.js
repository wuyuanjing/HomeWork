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
        setTimeout(function () {
            $("#share").animate({
                attr : "y",
                target : getScroll().top + (getInner().height - parseInt($("#share").css("height"))) / 2
            });
        },30);
       
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

    //设置轮播图效果
    //轮播器初始化
    $("#banner img").opacity(0);
    $("#banner img").eq(0).opacity(100);
    $("#banner ul li").eq(0).css("color","#333");
    $("#banner strong").html($("#banner img").eq(0).attr("alt"));

    //手动轮播器
    $("#banner ul li").hover(function () {
        clearInterval(banner_timer);
        //获取当前鼠标移入元素的下标
        var _index = $(this).index();
        banner(_index);
    },function () {
        banner_index = $(this).index() + 1;
        banner_timer = setInterval(banner_fn,1000);
    });

    //设置轮播器计数器
    var banner_index = 0;
    //自动轮播器
    var banner_timer = setInterval(banner_fn,1000);

    function banner(banner_index) {
        //1.先让所有的图片透明度变为0
        $("#banner img").opacity(0);
        //2.让对应的图片的显示出来
        $("#banner img").eq(banner_index).opacity(100);
        //3.当鼠标移入按钮的时候，先让所有的按钮颜色为#999，
        $("#banner ul li").css("color","#999")
        //4.然后当鼠标移入到当前指定的按钮上面，让他的贪色变成#333
        $("#banner ul li").eq(banner_index).css("color","#333");
        //5.当鼠标移入按钮的时候，让轮播器的文字信息进行更换
        $("#banner strong").html($("#banner img").eq(banner_index).attr("alt"));
    };
    
    function banner_fn() {
        if(banner_index >= $("#banner img").size()) banner_index = 0;
        banner(banner_index);
        //让轮播器计数器每个1秒加1
        banner_index++;
    }

    //设置延迟加载效果

  /*  //alert($("#photo img").eq(0).attr("src"));   //获取当前元素属性里面的值
    var a = $("#photo img").eq(0).attr("xsrc");
    //设置元素里面属性的值
    $("#photo img").eq(0).first().setAttribute("src",a)

    //设置当图片进入到可视区域的时候显示

        // 需要：
        //     1.获取当前浏览器的高度
        //     2.获取滚动条滚动的距离
        //     3.获取当前图片距离顶部的距离
        //     4.判断当前浏览器的高度  加上   滚动条  滚动的距离  如果  大于  当前脱线距离顶部的距离，那就将图片的src
        //         属性的值替换成xsrc属性的值

    */

    // alert(getInner().height)   //获取当前可视区域的高度

    // alert(getScroll().top)    //获取当前滚动条滚动的距离

    var wait_load = $("#photo img");
    wait_load.opacity(0);
    $(window).bind("scroll",function () {
        setTimeout(function () {
            for(var i=0; i<wait_load.size();i++){
                var _this = wait_load.ge(i);
                if((getInner().height + getScroll().top) >= offsetTop(_this)){
                    $(_this).attr("src",$(_this).attr("xsrc")).animate({
                        attr : "o",
                        target : 100,
                        t: 30,
                        step : 10,
                    })
                }
            }
        },100);
    });
});







