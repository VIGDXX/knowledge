module.exports = {
    parseCookie: function(cookie) {
        let cookies = {}
        if(!cookie) {
            return cookies
        }
        var list = cookie.split(';')
        list.forEach( (item,index) => {
            let pair = item.split('=')
            cookies[pair[0].trim()] = pair[1]
        })
        return cookies
    }
}