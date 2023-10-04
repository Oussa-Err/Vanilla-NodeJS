const fs = require("fs")
const http = require('http')
const url = require("url")
const events = require('events')
const replaceHtml = require("./Modules/replaceHtml")


const html = fs.readFileSync("./Template/index.html", "utf-8")
let products = JSON.parse(fs.readFileSync("./Data/products.json", "utf-8"))
let productListHtml = fs.readFileSync("./Template/product-list.html", "utf-8")
let productDetailHtml = fs.readFileSync("./Template/product-details.html", 'utf-8')


const server = http.createServer()


// server.on('request', (request, response) => {
//     let { query, pathname: path } = url.parse(request.url, true)

//     if (path === '/' || path.toLocaleLowerCase() === "/home") {
//         response.writeHead(200, {
//             'Content-Type': 'text/html',
//             'My-Header': 'hello world'
//         })
//         response.end(html.replace('{{%CONTENT%}}', 'You are in the Home page'))
//     }
//     else if (path.toLocaleLowerCase() === "/about") {
//         response.writeHead(200, {
//             'Content-Type': 'text/html',
//             'My-Header': 'hello world'
//         })
//         response.end(html.replace("{{%CONTENT%}}", `you are in the about page`))
//     }
//     else if (path.toLocaleLowerCase() === "/contact") {
//         response.writeHead(200, {
//             'Content-Type': 'text/html',
//             'My-Header': 'hello world'
//         })
//         response.end(html.replace("{{%CONTENT%}}", `you are in the contact page`))
//     }
//     else if (path.toLocaleLowerCase() === '/products') {
//         response.writeHead(200, { 'Content-Type': 'text/html' })
//         if (!query.id) {
//             let productHtmlArray = products.map((prod) => {
//                 return replaceHtml(productListHtml, prod)
//             })
//             let productResponseArray = html.replace('{{%CONTENT%}}', productHtmlArray.join(''))
//             response.end(productResponseArray)
//         } else {
//             let prod = products[query.id]
//             let productDetailResponseHtml = replaceHtml(productDetailHtml, prod)
//             response.end(html.replace('{{%CONTENT%}}', productDetailResponseHtml))
//         }
//     }
//     else {
//         response.writeHead(404,
//             {
//                 'Content-Type': 'text/html'
//             }
//         )
//         response.end(html.replace("{{%CONTENT%}}", `404: page not found`))
//     }
// })

server.listen(8080, '127.0.0.1', () => {
    console.log('server has started')
})

// ******************************************
// UNDERSTANDING EVENT DRIVEN ARCHITECTURE ** OBSERVER PATTERN
// ******************************************

// let myEmitter = new events.EventEmitter()


// myEmitter.on('userCreated', (name, id) => {
//     console.log(`new ${name} whit ID ${id} created`)
// })

// myEmitter.on('userCreated', (name, id) => {
//     console.log(`new user ${name} is added in database whit ID ${id}`)
// })
  
// myEmitter.emit('userCreated', "jhon", 7)

// using readable and writable stream
server.on('request', (req, res) => {
    let rs = fs.createReadStream("./large.txt")
    rs.on('data', (chunck) => {
        res.write(chunck)
        res.end()
    })
    rs.on('error', (error) => {
        res.end(error.message)
    })
})
