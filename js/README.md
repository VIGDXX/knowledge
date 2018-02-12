# encodeURIComponent and decodeURIComponent

# hash and history
	hash mode 
# ajax
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