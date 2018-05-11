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
# 5 深度克隆
1. 递归
```
function deepCopy(data) {
	var dataType = Object.prototype.toString.call(data)
	if( dataType === '[object Array]'  ) {
		var arr = []
		data.forEach(function(item,index) {
			arr[index] = deepCopy(item)
		})
		return arr
	} else if(dataType ==='[object Object]'){
		var obj = {}
		for(var key in data) {
			obj[key] = deepCopy(data[key])
		}
		return obj
	} else {
		return data
	}	
}
// for in 不要循环数组，如果扩展 Array.prototype GG
```
2. JSON
```
JSON.parse(JSON.stringify(data))
//丢失函数和原型链
```
3. 考虑到循环引用，从 vuex copy过来
[vuex deepcopy](https://github.com/vuejs/vuex/blob/dev/src/util.js#L30)
```
/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
export function find (list, f) {
  const { length } = list
  let index = 0
  let value
  while (++index < length) {
    value = list[index]
    if (f(value, index, list)) {
      return value
    }
  }
}
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
export function deepCopy (obj, cache = []) {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  const hit = find(cache, c => c.original === obj)
  if (hit) {
    return hit.copy
  }

  const copy = Array.isArray(obj) ? [] : {}
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy
  })

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
  })

  return copy
}
```
