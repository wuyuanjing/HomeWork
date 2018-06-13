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
    $("#login .close").click(function () {
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

    //调用登录框拖拽效果
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
        if ($(this).css('color') != 'rgb(51, 51, 51)') {
            banner(_index, _index == 0 ? $('#banner ul li').size() - 1 : _index - 1);
        }
        banner(_index,_index == 0 ? $('#banner ul li').size() - 1 : _index - 1);
    },function () {
        banner_index = $(this).index() + 1;
        banner_timer = setInterval(banner_fn,1000);
    });

    //设置轮播器计数器
    var banner_index = 1;
    //自动轮播器
    var banner_timer = setInterval(banner_fn,1000);
    //设置轮播器的类型
    var banner_type = 1;

    function banner(banner_index,prev) {
        if(banner_type == 1){
            $('#banner img').css('zIndex', 1)
            $('#banner img').eq(prev).animate({
                attr : 'o',
                target : 0,
                t : 30,
                step : 10
            });
            $('#banner img').eq(banner_index).animate({
                attr : 'o',
                target : 100,
                t : 30,
                step : 10
            }).css('top', 0).css('zIndex', 2);
            $("#banner ul li").css("color","#999")
            $("#banner ul li").eq(banner_index).css("color","#333");
            $("#banner strong").html($("#banner img").eq(banner_index).attr("alt"));
        }else if(banner_type == 2){
            $('#banner img').opacity(100);
            $('#banner img').css('zIndex', 1);
            $('#banner ul li').css('color', '#999');
            $("#banner ul li").eq(banner_index).css('color', '#333');
            $('#banner strong').html($('#banner img').eq(banner_index).attr('alt'));
            $('#banner img').eq(prev).animate({
                attr : 'y',
                target : 150,
                t : 30,
                step : 10
            });
            $('#banner img').eq(banner_index).animate({
                attr : 'y',
                target : 0,
                t : 30,
                step : 10
            }).css('top', '-150px').css('zIndex', 2);
        }

    };

    function banner_fn() {

        if(banner_index >= $("#banner img").size()) banner_index = 0;
        banner(banner_index,banner_index == 0 ? $('#banner ul li').size() - 1 : banner_index - 1);
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


    //设置注册框效果


    //设置登录框居中效果
    var reg= $("#reg");
    reg.center(600,550).resize(function () {
        reg.center(600,550);
        if(reg.cregss("display") == "block"){
            screen.lock();
        }
    });
    //设置登录框关闭效果
    $("#reg .close").click(function () {
        reg.center(600,550);
        reg.hide();
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
        if (reg.releaseCapture) {
            reg.releaseCapture();
        }
        document.documentElement.style.overflow = "auto";
    });

    //设置登录框弹出效果
    $(".reg").click(function () {
        reg.show();
        //遮罩锁屏效果
        screen.lock().animate({
            attr : "o",
            target : 30,
            step :2,
            t : 30
        });
        //鼠标锁住时触发(点击住)
        if (reg.setCapture) {
            reg.setCapture();
        }
        document.documentElement.style.overflow = "hidden";
    });

    //调用登录框拖拽效果
    $("#reg").drop();

    //设置注册验证效果
    $("form").form("user").eq(0).bind("focus",function () {
        $("#reg .info_user").show();
        $('#reg .succ_user').hide();
        $('#reg .error_user').hide();
    }).bind("blur",function () {
        if (trim($(this).value()) == '') {
            $('#reg .info_user').hide();
        } else if (!/[a-zA-Z0-9_]{2,20}/.test($(this).value())) {
            $('#reg .error_user').css('display', 'block');
            $('#reg .info_user').css('display', 'none');
        }else {
            $('#reg .succ_user').css('display', 'block');
            $('#reg .error_user').css('display', 'none');
            $('#reg .info_user').css('display', 'none');
        }
    })
});







