# 1. 清除浮动
## 参考资料
[清除浮动](http://www.iyunlu.com/view/css-xhtml/55.html).
# 2. 移动端响应式
1. 屏幕尺寸
屏幕对角线尺寸 1英尺 = 2.54厘米
2. 物理像素
即屏幕分辨率，纵横方向上的像素数目
3. 屏幕像素密度(ppi)
每英寸显示的像素点的数量，根据ppi转换成相应 X倍屏幕
4. viewport
```
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.max">
```
大部分移动浏览器 默认视口宽度 980px，不是理想视口，需要转化，视口宽度=设备宽度
结合以上概念，做移动端响应式可以使用 rem，参考代码
```
(function(){
    var designWidth = 640 // 设计稿宽度
    document.addEventListener('DOMContentLoaded',function(){
        var html = document.documentElement;
        var deviceWidth = html.clientWidth;
        html.style.fontSize = deviceWidth/(designWidth*100) + "px"
    },false);
})()
```
图片响应式

## 参考资料
1. [深入了解viewport和px](http://tgideas.qq.com/webplat/info/news_version3/804/7104/7106/m5723/201509/376281.shtml).
2. [移动web资源整理](http://www.cnblogs.com/PeunZhang/p/3407453.html#meta_6).
3. [rem布局自适应布局方案总结](https://github.com/yunzhijia/front-end/blob/master/rem%E5%B8%83%E5%B1%80%E8%87%AA%E9%80%82%E5%BA%94%E5%B8%83%E5%B1%80%E6%96%B9%E6%A1%88%E6%80%BB%E7%BB%93.md).
4. [viewport 剖析 --ppk](https://www.w3cplus.com/css/viewports.html).
5. [使用Flexible实现手淘H5页面的终端适配](https://github.com/amfe/article/issues/17).

# 3. flex 布局
    display:flex 容器的6个属性
    1）flex-direction: row|row-reverse|colum|colum-reverse 项目在主轴排列的方向
    2）flex-wrap: nowrap|wrap|wrap-reverse 项目是否换行
    3）flex-flow: <flex-direction> || <flex-wrap>;
    4）justify-content: flex-start|flex-end|center|space-bewtten|space-around 项目在主轴的对齐方式
    5）align-items:flex-start|flex-end|center|baseline|stretch 项目在交叉轴的对齐方式
    6）align-content：flex-start | flex-end | center | space-between | space-around | stretch; 多根轴线的对齐方式

    项目的属性
    1）flex
    2）align-self align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性
# 4. 一侧固定，一侧自适应;三列
## 4.1 一侧固定，一侧自适应
```
<div>
    <div class="sidebar"><p>sidebar</p></div>
    <div class="content"><p>content</p></div>
</div>
```
```
.sidebar {
    float:left;
    width:200px;
}
.content {
    margin-left: 200px;
}
// or
.sidebar {
    float:left;
    width:200px;
    margin-right: -200px;
}
.content {
    float:left;
    width:100%;
}
.content p{
    margin-left: 200px;
}
```

## 4.2 三列
 *绝对定位法
 *自身浮动法
 *圣杯布局 (负边距) center,left,right 都左浮动，left 的margin-left:100% ;right 的 margin-left right的负宽度，在设置center 子盒子的margincd
    

//当一个static元素在top/left使用负边距时，它把元素向这个特定的方向拉
//但是当你将负边距设置为相对bottom/right时，它并不会把元素向下或右拉，相反，它会把后面的元素往里面拉，从而覆盖自己。
[负边距详解](https://segmentfault.com/a/1190000003942591).
# 5. BCF: Block Formatting Contexts (块级格式化上下文)
    具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素
    触发 BFC 特性:
    body 根元素
        *浮动元素：float 除 none 以外的值
        *绝对定位元素：position (absolute、fixed)
        *display 为 inline-block、table-cells、flex
        *overflow 除了 visible 以外的值 (hidden、auto、scroll)
    [10 分钟理解 BFC 原理](https://zhuanlan.zhihu.com/p/25321647).