# 1 encodeURIComponent and decodeURIComponent

# 2 hash and history
	hash mode 
# 3 ajax
```
function ajax(option) {
	var xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
	// open 之前做监听
	xhr.onreadystatechange = function() {
		if(xhr.readydtate = 4) {
			return xhr.response
		}
	}
	xhr.upload.onprogress = function(e) {
		console.log(e)
	}
	xhr.open(option.method,option.url,true);
	// open 之后 setRequestHeader
	xhr.setRequestHeader("my-header","test");
	xhr.send(option.formdata || null);
}
```
##参考资料
1.[你真的会使用XMLHttpRequest吗？](https://segmentfault.com/a/1190000004322487#articleHeader0).
# 4 判断类型
```
var toString = Object.prototype.toString;
function isArray(val) {
  return toString.call(val) === '[object Array]';
  // [原因](https://www.cnblogs.com/laiqun/p/5645801.html)
}

```