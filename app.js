const fs = require("fs")
const http = require('http')


const regiserPage = fs.readFileSync('./content/registerPage.html', 'utf-8')
const server = http.createServer((request, response) => {
    response.end(regiserPage)
    console.log('server just received a request')
})


server.listen(3000, '127.0.0.1', () => {
    console.log('server has started')
})
