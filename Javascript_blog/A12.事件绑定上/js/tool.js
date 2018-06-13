/**
 * Created by ThinkPad on 2018/5/11.
 */
//跨浏览器事件绑定
function addEvent(obj,type,fn) {
    if(obj.addEventListener != undefined){
        obj.addEventListener(type,fn,false)
    }else{
        obj.attachEvent("on"+type,function () {
            fn.call(obj,window.event);
        })
    }
};

//跨浏览器删除事件
function removeEvent(obj, type, fn) {
    if (typeof removeEventListener != 'undefined') {
        obj.removeEventListener(type, fn);
    } else if (typeof detachEvent != 'undefined') {
        obj.detachEvent('on' + type, fn);
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
        value =  window.getComputedStyle(element, null)[attr];
    }else if (typeof element.currentStyle != 'undefined') {
        value =  element.currentStyle[attr];
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