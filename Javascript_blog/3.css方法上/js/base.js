/**
 * Created by ThinkPad on 2018/5/9.
 */
/*函数式对象写法*/
function Base() {

}
//创建一个数组，用来保存获取到的元素节点
Base.prototype.elements = [];
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
    //获取到页面里面所有的元素
  var all = node.getElementsByTagName("*");
  //通过for循环进行遍历
  for(var i=0;i<all.length;i++){
      //判断页面所有元素的类名等于我传进来的类名的元素，
      if(all[i].className == className){
          //把他们添加到数组节点里面
          this.elements.push(all[i])
      }
  }
  return this;
};
//获取节点数组的某一个
Base.prototype.getElement = function (num) {
    var element = this.elements[num];  //element就是第二个box1
    this.elements = [];  //节点数组清空
    this.elements[0] = element; //这个空数组里面的第一个内容是我们刚才保存的element
    return this;
};

//设置css方法
Base.prototype.css = function (attr,value) {
    for(var i =0; i< this.elements.length;i++){
        if(arguments.length == 1){
            if(typeof window.getComputedStyle != "undefined"){
                return window.getComputedStyle(this.elements[i], null)[attr];{}
            }else if (typeof this.elements[i].currentStyle != 'undefined') {
                return this.elements[i].currentStyle[attr];
            }
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




