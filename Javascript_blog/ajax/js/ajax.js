/**
 * Created by ThinkPad on 2018/5/24.
 */
//封装xhr对象兼容
function createXHR() {
    if(typeof XMLHttpRequest != "undefined"){
        return new XMLHttpRequest();
    }else if(typeof ActiveXObject != "undefined"){
        var version = [
            "MSXML2.XMLHttp.6.0",
            "MSXML2.XMLHttp.3.0",
            "MSXML2.XMLHttp"
        ];
        for(var i=0;i<version.length;i++){
            try {
                return new ActiveXObject(version[i]);
            }catch (e){
                //跳过
            }
        }
    }else{
        throw new Error("您的浏览器不支持xhr对象");
    }
}

function params(data) {
    var arr = [];
    for(i in data){
        arr.push(encodeURIComponent(i) + "=" + encodeURIComponent(data[i]));
    }
    return arr.join("&");
}

//封装ajax
function ajax(obj) {
    //创建xhr对象
    var xhr = createXHR();
    //设置url
    obj.url = obj.url + "?rand=" + Math.random();
    obj.data = params(obj.data);
    if(obj.method == "get") obj.url+= obj.url.indexOf("?")==-1 ? "?" +obj.data : "&" + obj.data;
    //准备发送请求
    xhr.open(obj.method,obj.url,obj.async);
    if(obj.method == "post"){
        //模拟表单提交
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(obj.data);
    }else{
        //发送请求
        xhr.send(null);
    }
    if(obj.async == true){
        //接受响应
        xhr.onreadystatechange = function () {
            if(xhr.readyState == 4){
                callback();
            }
        }
    }
    if(obj.async == false){
        callback();
    }

    function callback() {
        if(xhr.status == 200){
            obj.success(xhr.responseText);
        }else{
            alert("返回数据失败！错误代码:" + xhr.status + ";错误信息:"+xhr.statusText);
        }
    }
}