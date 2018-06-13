/**
 * Created by ThinkPad on 2018/5/9.
 */
/*函数式对象写法*/
function Base(_this) {
    //创建一个数组，用来保存获取到的元素节点
    this.elements = [];
    if(_this != undefined){
    	this.elements[0] =_this;
    }
    
    
    //通过id获取元素
    this.getId = function (id) {
        this.elements.push(document.getElementById(id));
        return this;
    };
    
    //通过name获取元素
    this.getName = function (name) {
        var names = document.getElementsByName(name);  //3
        for(var i=0;i<names.length;i++){
            this.elements.push(names[i]);
        }
        return this;
    };
    
    //通过TagName获取元素
    this.getTagName = function (tag) {
        var tagName = document.getElementsByTagName(tag);
        for(var i=0;i<tagName.length;i++){
            this.elements.push(tagName[i]);
        }
        return this;
    };
}



//设置css方法
Base.prototype.css = function (attr,value) {
    for(var i =0; i< this.elements.length;i++){
        this.elements[i].style[attr] = value;
    }
    return this;
};

//设置修改元素内容的方法
Base.prototype.html = function (str) {
    for(var i =0; i< this.elements.length;i++){
        this.elements[i].innerHTML = str;
    }
    return this;
};

//设置点击方法
Base.prototype.click = function (fn) {
    for(var i =0; i< this.elements.length;i++){
        this.elements[i].onclick = fn;
    }
    return this;
}




