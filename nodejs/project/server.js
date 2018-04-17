const http = require('http') 
const util = require('./util') 

const server = http.createServer( (request, response) => {
    var cookies = util.parseCookie(request.headers.cookie)
    console.log(cookies.sessionid)
    response.setHeader('Content-Type', 'text/html');
    response.setHeader('Set-Cookie', 'sessionid=38afes7a8; HttpOnly; Path=/');
    response.end('hello')
})
server.listen(8080)
