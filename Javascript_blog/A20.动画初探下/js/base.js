/**
 * Created by ThinkPad on 2018/5/9.
 */
    //在前台new 出一个对象
var $ = function (args) {
        return new Base(args);
    };
/*函数式对象写法*/
function Base(args) {
    //创建一个数组，用来保存获取到的元素节点
    this.elements = [];
    // alert(this.elements.length)
    if(typeof args == "string"){
        if(args.indexOf(" ") != -1){
            var childElements = [];
            var node =[];  //用来保存父级节点
            var elements = args.split(" "); //#box p .a
            for(var i=0;i<elements.length;i++){
                if(node.length == 0)node.push(document);
               switch (elements[i].charAt(0)){
                   case "#":
                       childElements = [];
                       childElements.push(this.getId(elements[i].substring(1)));
                       node = childElements;
                       break;
                   case ".":
                       childElements = [];
                       for(var j=0;j<node.length;j++){
                           var temps = this.getClass(elements[i].substring(1),node[j]);
                           for(var h=0;h<temps.length;h++){
                               childElements.push(temps[h]);
                           }
                       }
                       node = childElements;
                       break;
                   default:
                       childElements = [];
                       for(var g=0;g<node.length;g++){
                           var temps = this.getTagName(elements[i],node[g]);
                           for(var f=0;f<temps.length;f++){
                                childElements.push(temps[f]);
                           }
                       }
                       node = childElements;
               }
            }
            this.elements = childElements;
        }else{
            switch (args.charAt(0)){
                case "#":
                    this.elements.push(this.getId(args.substring(1)));
                    break;
                case ".":
                    this.elements= this.getClass(args.substring(1));
                    break;
                default:
                    this.elements = this.getTagName(args);
            }
        }

    }else if(typeof args == "object"){
        if(args != undefined){
            this.elements[0] =args;
        }
    }else if(typeof args == "function"){
        this.ready(args);
    }
};
//设置等待DOM节点加载完毕方法
Base.prototype.ready = function (fn) {
    addDomLoaded(fn);
};
//设置CSS选择器(查找元素的子节点)
Base.prototype.find = function (str) {
    var childElements = [];
    for(var i=0;i<this.elements.length;i++){
        switch (str.charAt(0)){
            case "#":
                childElements.push(this.getId(str.substring(1)));
                break;
            case ".":
                var all = this.getClass(str.substring(1),this.elements[i]);
                for(var k=0;k<all.length;k++){
                    if(all[k].className == str.substring(1)){
                        childElements.push(all[k])
                    }
                }
                break;
            default:
                var tagName = this.getTagName(str, this.elements[i]);
                for(var j=0;j<tagName.length;j++){
                   childElements.push(tagName[j]);
                }
        }
    }
    this.elements = childElements;
    return this;
};


//通过id获取元素
Base.prototype.getId = function (id) {
   return document.getElementById(id);
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
Base.prototype.getTagName = function (tag,parentNode) {
    var node = null;
    var temps = [];
    if (parentNode != undefined) {
        node = parentNode;
    } else {
        node = document;
    }
    var tagName = node.getElementsByTagName(tag);

    for(var i=0;i<tagName.length;i++){
        temps.push(tagName[i]);
    }
    return temps;
};
//通过ClaaName获取元素
Base.prototype.getClass = function (className,parentNode) {
    var node = null;
    var temps = [];
    if(parentNode != undefined){
        node = parentNode;
    }else{
        node = document;
    }
  var all = node.getElementsByTagName("*");
  for(var i=0;i<all.length;i++){
      if(all[i].className == className){
          temps.push(all[i])
      }
  }
  return temps;
};
//获取首个节点，并返回这个节点对象
Base.prototype.first = function () {
    return this.elements[0];
};
//获取最后一个节点，并返回这个节点对象
Base.prototype.last = function () {
    return this.elements[this.elements.length - 1];
};
//获取某一个节点，并返回这个节点对象
Base.prototype.ge = function (num) {
    return this.elements[num];
}
//获取节点数组的某一个,返回的是Base对象
Base.prototype.eq = function (num) {
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
        var element = this.elements[i];
        window.onresize = function () {
            fn;
            if (element.offsetLeft > getInner().width - element.offsetWidth) {
                element.style.left = getInner().width - element.offsetWidth+"px";
            }
            if (element.offsetTop > getInner().height - element.offsetHeight) {
                element.style.top = getInner().height - element.offsetHeight+"px";
            }
        };
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

//设置动画方法

Base.prototype.animate = function (obj) {
    for(var i=0;i< this.elements.length;i++){
        var element =  this.elements[i];    //得到当前要设置的元素
        var attr = obj["attr"] == "x" ? "left" : obj["attr"] == "y" ? "top" :
                    obj["attr"] == "w" ? "width" : obj["attr"] == "h" ? "height" : "left";
        var start = obj["start"] != undefined ? obj["start"] : getStyle(element,attr); //可选参数
        var step = obj["step"] != undefined ? obj["step"] : 5; //可选参数
        var t = obj["t"] != undefined ? obj["t"] : 30;//可选参数
        var speed = obj["speed"] != undefined ? obj["speed"] : 6;  //可选参数，设置缓冲值
        var type = obj["type"] == 0 ? "constant" : obj["buffer"] == 1 ? "buffer" : "buffer";
        var alter = obj["alter"];
        var target = obj["target"];

        if(alter != undefined && target == undefined){
            target = alter + start;
        }else if(alter == undefined && target == undefined){
            throw  new Error("alter增量或者target目标量必须传递一个！");
        }

        clearInterval(window.timer);        //解决了反复开启定时器的问题



        if(getStyle(element,attr) > target) step = -step;       //判断如果当前元素的距离小于目标点，就把步长设置为负数

        element.style[attr] = start + step + "px";      //解决了当点击按钮，不能反复执行的问题

        //运动的框架
        timer = setInterval(function () {
            if(type == "buffer"){
                var step = (target - getStyle(element,attr))/speed;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
            }

            if(step > 0 && Math.abs(getStyle(element,attr) -target) <= step) {
               clearInterval(timer);
               element.style[attr] = target + "px";
           }else if(step < 0 && getStyle(element,attr) -target <= Math.abs(step)){
               clearInterval(timer);
               element.style[attr] = target + "px";
           }else{
               element.style[attr] = getStyle(element,attr) + step + "px";
           }

           //打印出test数据
            document.getElementById("aaa").innerHTML +=step+ "<br/>";


        },t)
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
                preDef(e);
                var e = getEvent(e);
                var l = e.clientX - diffX;
                var t = e.clientY - diffY;
                if(l < 0){
                    l = 0;
                }else if(l > getInner().width - _this.offsetWidth){
                    l = getInner().width - _this.offsetWidth;
                }
                if(t < 0){
                    t = 0;
                }else if(t > getInner().height - _this.offsetHeight){
                    t = getInner().height - _this.offsetHeight;
                }
                _this.style.left = l + 'px';
                _this.style.top = t + 'px';
            };
            document.onmouseup = function () {
                this.onmousemove = null;
                this.onmouseup = null;
            };

        }
    }
    return this;
};