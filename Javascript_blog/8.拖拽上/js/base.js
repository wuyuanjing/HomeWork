/**
 * Created by ThinkPad on 2018/5/9.
 */
/*函数式对象写法*/
function Base(_this) {
    //创建一个数组，用来保存获取到的元素节点
    this.elements = [];
    if(_this != undefined){
        this.elements[0] = _this;
    }
};
//通过id获取元素
Base.prototype.getId = function (id) {
    this.elements.push(document.getElementById(id));
    return this;
};
//通过name获取元素
Base.prototype.getName = function (name) {
    var names = document.getElementsByName(name);  //3
    for(var i=0;i<names.length;i++){
        this.elements.push(names[i]);
    }
    return this;
};
//通过TagName获取元素
Base.prototype.getTagName = function (tag) {
    var tagName = document.getElementsByTagName(tag);
    for(var i=0;i<tagName.length;i++){
        this.elements.push(tagName[i]);
    }
    return this;
};
//通过ClaaName获取元素
Base.prototype.getClass = function (className,idName) {
    var node = null;
    if(arguments.length == 2){
        node = document.getElementById(idName);
    }else{
        node = document;
    }
  var all = node.getElementsByTagName("*");
  for(var i=0;i<all.length;i++){
      if(all[i].className == className){
          this.elements.push(all[i])
      }
  }
  return this;
};
//获取节点数组的某一个
Base.prototype.getElement = function (num) {
    var element = this.elements[num];
    this.elements = [];  
    this.elements[0] = element;
    return this;
};
//添加类名方法
Base.prototype.addClass = function (className) {
    for(var i=0;i<this.elements.length;i++){
        if(!hasClass(this.elements[i],className)){
            this.elements[i].className += " " + className;
        }
    }
    return this;
};
//移除类名方法
Base.prototype.removeClass = function (className) {
    for(var i=0;i<this.elements.length;i++){
        if(hasClass(this.elements[i],className)){
            this.elements[i].className = this.elements[i].className.replace(new RegExp('(\\s|^)' + className + '(\\s|$)'), ' ');
        }
    }
    return this;
};

//设置css方法
Base.prototype.css = function (attr,value) {
    for(var i =0; i< this.elements.length;i++){
        if(arguments.length == 1){
           return getStyle(this.elements[i],attr);
        }else{
            this.elements[i].style[attr] = value;
        }
    }
    return this;
};
//设置修改元素内容的方法
Base.prototype.html = function (str) {
    for(var i =0; i< this.elements.length;i++){
        if(arguments.length == 0){
            return this.elements[i].innerHTML;
        }
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
};
//设置鼠标移入移出方法
Base.prototype.hover = function (over,out) {
    for(var i =0; i< this.elements.length;i++){
       this.elements[i].onmouseover = over;
       this.elements[i].onmouseout = out;
    }
    return this;
};
//设置显示方法
Base.prototype.show = function () {
    for(var i =0; i< this.elements.length;i++){
       this.elements[i].style.display = "block";
    }
    return this;
};
//设置隐藏的方法
Base.prototype.hide = function () {
    for(var i =0; i< this.elements.length;i++){
        this.elements[i].style.display = "none";
    }
    return this;
};
//设置元素居中的方法
Base.prototype.center = function (width,height) {
    for(var i=0;i< this.elements.length;i++){
       this.elements[i].style.left =  (getInner().width - width) / 2 + "px";
       this.elements[i].style.top = (getInner().height - height) / 2 + "px";
    }
    return this;
};
//触发浏览器窗口方法
Base.prototype.resize = function (fn) {
    for(var i=0;i< this.elements.length;i++){
        window.onresize = fn;
    }
    return this;
};
//设置遮罩锁屏方法
Base.prototype.lock = function () {
    for(var i=0;i< this.elements.length;i++){
        this.elements[i].style.width = getInner().width + "px";
        this.elements[i].style.height = getInner().height + "px";
        this.elements[i].style.display = "block";
    }
    return this;
};
//设置解锁效果
Base.prototype.unlock = function () {
    for(var i=0;i< this.elements.length;i++){
       this.elements[i].style.display = "none";
    }
    return this;
};
//设置拖拽方法
Base.prototype.drop = function () {
    for(var i=0;i< this.elements.length;i++){
        this.elements[i].onmousedown = function (e) {
            var e = getEvent(e);
            var _this = this;
            var diffX = e.clientX - _this.offsetLeft;
            var diffY = e.clientY - _this.offsetTop;
            document.onmousemove = function (e) {
                var e = getEvent(e);
                _this.style.left = e.clientX - diffX + 'px';
                _this.style.top = e.clientY - diffY + 'px';
            }
            document.onmouseup = function () {
                this.onmousemove = null;
                this.onmouseup = null;
            }
        }
    }
    return this;
};