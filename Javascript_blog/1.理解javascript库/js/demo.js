/**
 * Created by ThinkPad on 2018/5/9.
 */
window.onload = function () {
    alert(Base.getId("box"));
    alert(Base.getName("sex")[0].value);
    Base.getTag("p")[0].style.background = "red";
}
