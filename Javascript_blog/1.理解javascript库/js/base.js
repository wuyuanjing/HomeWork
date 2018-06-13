/**
 * Created by ThinkPad on 2018/5/9.
 */
//对象式写法
var Base = {
    //通过id获取元素
    getId : function (id) {
        return document.getElementById(id)
    },
    //通过name获取元素
    getName : function (name) {
        return document.getElementsByName(name);
    },
    //通过TagName获取元素
    getTag : function (tag) {
        return document.getElementsByTagName(tag);
    }
};





























/*
// 函数式
//通过id获取元素
function $(id) {
    return document.getElementById(id);
}
//通过name获取元素
function $$(name) {
    return document.getElementsByName(name);
}
//通过tagName获取元素
function $$$(tag) {
    return document.getElementsByTagName(tag)
}
*/


/* var oBox = document.getElementById("box");
 alert(oBox);
 var oSex = document.getElementsByName("sex")[0];
 alert(oSex.value);
 var oP = document.getElementsByTagName("p")[0];
 alert(oP.innerHTML)*/