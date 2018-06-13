

//浏览器检测
/*(function () {
    //设置一个全部变量，用来保存获取到的浏览器信息
    window.sys = {};
    //获取浏览器的信息,并且将信息全部转化为小写
    var ua = navigator.userAgent.toLocaleLowerCase();
    //保存浏览器的版本信息
    var s = null;
    //判断能不能匹配ie浏览器的版本信息，如果能够匹配到，就将ie浏览器的版本信息赋给变量s
    (s = ua.match(/msie ([\d.]+)/)) ? sys.ie = s[1] :
        //如果不能匹配到，然后就检测能不能获取火狐浏览器的版本信息，如果能够获取到，就将火狐浏览器的版本信息赋给变量s
    (s = ua.match(/firefox\/([\d.]+)/)) ? sys.firefox = s[1] :
        //如果火狐浏览器不能匹配到版本信息，就检测chrome能否获取到浏览器的版本信息，如果能够获取到，就赋给变量s
    (s = ua.match(/chrome\/([\d.]+)/)) ? sys.chrome = s[1] :
    (s = ua.match(/opera.*version\/([\d.]+)/)) ? sys.opera = s[1] :
    (s = ua.match(/version\/([\d.]+).*safari/)) ? sys.safari = s[1] : 0;
})();*/


//获取chrome浏览器的版本信息*!/
//判断当前获取的浏览器信息里面有没有要匹配的chrome版本信息
if(/chrome\/([\d.]+)/.test(ua)){
    //如果有的话，就将匹配到的浏览器信息保存到变量s里面
    s = ua.match(/chrome\/([\d.]+)/);
    //给全局变量设置一个属性chrome，让chrome的值为当前浏览器的版本信息
    sys.chrome = s[1];
}


//!*获取ie浏览器的版本信息*!/
if(/msie ([\d.]+)/.test(ua)){
    s = ua.match(/msie ([\d.]+)/);
    sys.ie = s[1];
}
//!*获取火狐浏览器的版本信息*!/
if ((/firefox\/([\d.]+)/).test(ua)) {
    s = ua.match(/firefox\/([\d.]+)/);
    sys.firefox = s[1];
}
//!*获取opera浏览器的版本信息*!/
if ((/opera.*version\/([\d.]+)/).test(ua)) {	//判断opera浏览器
    s = ua.match(/opera.*version\/([\d.]+)/);
    sys.opera = s[1];
}
//!*获取safari浏览器的版本信息*!/
if ((/version\/([\d.]+).*safari/).test(ua)) {	//判断safari浏览器
    s = ua.match(/version\/([\d.]+).*safari/);
    sys.safari = s[1];
}


