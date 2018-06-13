/**
 * Created by ThinkPad on 2018/5/11.
 */
//等待DOM加载
function addDomLoaded(fn) {
    if (document.addEventListener) {			//W3C
        addEvent(document, 'DOMContentLoaded', function () {
            fn();
            removeEvent(document, 'DOMContentLoaded', arguments.callee);
        });
    }
    else {								//IE
        var timer = null;
        timer = setInterval(function () {
            try {
                document.documentElement.doScroll('left');
                fn();
            } catch (ex) {};
        });
    }
}


//浏览器检测
(function () {
    window.sys = {};
    var ua = navigator.userAgent.toLocaleLowerCase();
    var s = null;
    (s = ua.match(/msie ([\d.]+)/)) ? sys.ie = s[1] :
    (s = ua.match(/firefox\/([\d.]+)/)) ? sys.firefox = s[1] :
    (s = ua.match(/chrome\/([\d.]+)/)) ? sys.chrome = s[1] :
    (s = ua.match(/opera.*version\/([\d.]+)/)) ? sys.opera = s[1] :
    (s = ua.match(/version\/([\d.]+).*safari/)) ? sys.safari = s[1] : 0;
})();


//跨浏览器事件绑定
function addEvent(obj,type,fn) {
    if(obj.addEventListener != undefined){
        obj.addEventListener(type,fn,false);
    }else{
        //创建一个可以保存事件的哈希表(散列表)
        if(!obj.events) obj.events = {};
        if(!obj.events[type]){
            //创建一个可以保存事件处理函数的数组
            obj.events[type] = [];
            //存储第一个事件处理函数
            if (obj['on' + type]) obj.events[type][0] = fn;
        }else{
            if (addEvent.array(fn,obj.events[type])) return false;
        }
        obj.events[type][addEvent.ID++] = fn;
        obj["on"+type] =addEvent.exec

    }
};
addEvent.ID = 1;
//同一个注册函数j进行屏蔽
addEvent.array = function (fn,es) {
    for (var i in es) {
        if (es[i] == fn) return true;
    }
    return false;
};

//事件处理函数调用
addEvent.exec =  function (event) {
    var e = event ||window.event;
    var es = this.events[e.type];
    for (var i in es) {
        es[i].call(this,e);
    }
};
//跨浏览器删除事件
function removeEvent(obj, type, fn) {
    if (typeof removeEventListener != 'undefined') {
        obj.removeEventListener(type, fn);
    } else if (typeof detachEvent != 'undefined') {
        var es = obj.events[type];
        for (var i in es) {
            if (es[i] == fn) {
                delete obj.events[type][i];
            }
        }
    }
}


//跨浏览器获取视口大小
function getInner() {
    if(typeof window.innerWidth != "undefined"){
        return {
            width : window.innerWidth,
            height : window.innerHeight
        }
    }else{
        return {
            width : document.documentElement.clientWidth,
            height : document.documentElement.clientHeight
        }
    }
}
//跨浏览器获取style样式
function getStyle(element,attr) {
    var value;
    if(typeof window.getComputedStyle != "undefined"){
        value =  parseInt(window.getComputedStyle(element, null)[attr]);
    }else if (typeof element.currentStyle != 'undefined') {
        value =  parseInt(element.currentStyle[attr]);
    }
    return value;
}
//判断class是否存在
function hasClass(element,className) {
    return element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}
//跨浏览器处理时间对象兼容问题
function getEvent(event) {
    return event || window.event;
}
//跨浏览器阻止元素的默认行为
function preDef(event) {
    var e = getEvent(event);
    if (typeof e.preventDefault != 'undefined') {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}