const http = require('http') 
const url = require('url')
const util = require('./util') 

const server = http.createServer( (request, response) => {
    console.log(request)
    var cookies = util.parseCookie(request.headers.cookie)
    console.log(cookies)
    response.setHeader('Content-Type', 'text/html');
    response.setHeader('Set-Cookie', 'sessionid=38afes7a8; HttpOnly; Path=/');
    response.end('hello')
})
server.listen(8080)