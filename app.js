const http = require('http')
const app = http

const server = http.createServer((request, response) => {
    response.end('hi there')
    console.log('server just received a request')
    console.log(request)
})



server.listen(3000, '127.0.0.1', () => {
    console.log('server has started')
})
