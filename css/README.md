# 清除浮动
## 参考资料
[清除浮动](http://www.iyunlu.com/view/css-xhtml/55.html).
# 移动端响应式
1.屏幕尺寸
屏幕对角线尺寸 1英尺 = 2.54厘米
2.物理像素
即屏幕分辨率，纵横方向上的像素数目
3.屏幕像素密度(ppi)
每英寸显示的像素点的数量，根据ppi转换成相应 X倍屏幕
4.viewport
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.max">
大部分移动浏览器 默认视口宽度 980px，不是理想视口，需要转化，视口宽度=设备宽度
结合以上概念，做移动端响应式可以使用 rem，参考代码
`
(function(){
    var designWidth = 640 // 设计稿宽度
    document.addEventListener('DOMContentLoaded',function(){
        var html = document.documentElement;
        var deviceWidth = html.clientWidth;
        html.style.fontSize = deviceWidth/(designWidth*100) + "px"
    },false);
})()
`
图片响应式

## 参考资料
[深入了解viewport和px](http://tgideas.qq.com/webplat/info/news_version3/804/7104/7106/m5723/201509/376281.shtml).
[移动web资源整理](http://www.cnblogs.com/PeunZhang/p/3407453.html#meta_6).
[rem布局自适应布局方案总结](https://github.com/yunzhijia/front-end/blob/master/rem%E5%B8%83%E5%B1%80%E8%87%AA%E9%80%82%E5%BA%94%E5%B8%83%E5%B1%80%E6%96%B9%E6%A1%88%E6%80%BB%E7%BB%93.md).
[viewport 剖析 --ppk](https://www.w3cplus.com/css/viewports.html).
[使用Flexible实现手淘H5页面的终端适配](https://github.com/amfe/article/issues/17).