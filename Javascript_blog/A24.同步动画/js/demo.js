/**
 * Created by ThinkPad on 2018/5/9.
 */

//等待页面所有DOM元素加载完毕之后再执行
$(function () {
    //获取member元素,当鼠标移入到个人中心上面，让下拉列表显示，当鼠标移出到个人中心，让下拉列表消失
    $(".member").hover(function(){
        $(this).css("background","url('img/arrow2.png') no-repeat 55px center");
        $(".member_ul").show().animate({
            attr : "o",
            target : 100,
            step :2,
            t : 30
        });
    },function(){
        $(this).css("background","url('img/arrow.png') no-repeat 55px center")
        $(".member_ul").animate({
            attr : "o",
            target : 0,
            step :2,
            t : 30,
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

//设置分享栏在页面垂直居中
			//		 居中       =			视口高度     - 元素高度  /2 
    $("#share").css("top",(getInner().height - parseInt($("#share").css("height"))) / 2 + "px");

    addEvent(window,"scroll",function () {
        $("#share").animate({
            attr : "y",
            	//		当前滚动条距离  +  分享栏居中
            target : getScroll().top + (getInner().height - parseInt($("#share").css("height"))) / 2
        })
    });


    $("#demo").click(function () {
        $(this).animate({
            target : 0.7,
            mul : {
                width : 300,
                opacity : 30,
                height : 300,
                fontSize : 40
            }
        });

    })
    
    
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


        

   
});







