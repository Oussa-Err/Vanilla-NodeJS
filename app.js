const fs = require("fs")
const http = require('http')
const url = require("url")
const events = require('events')
const replaceHtml = require("./Modules/replaceHtml")


/*LECTURE 8: CODE EXAMPLE**************
CREATING A SIMPLE WEB SERVER
***************************************/

const html = fs.readFileSync("./Template/index.html", "utf-8")
let products = JSON.parse(fs.readFileSync("./Data/products.json", "utf-8"))
let productListHtml = fs.readFileSync("./Template/product-list.html", "utf-8")
let productDetailHtml = fs.readFileSync("./Template/product-details.html", 'utf-8')


// const server = http.createServer()


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

// *****************************************************
// UNDERSTANDING EVENT DRIVEN ARCHITECTURE            **
// EMITTING & HANDLING CUSTOM EVENTS OBSERVER PATTERN **
// *****************************************************

// let myEmitter = new events.EventEmitter()


// myEmitter.on('userCreated', (name, id) => {
//     console.log(`new ${name} whit ID ${id} created`)
// })

// myEmitter.on('userCreated', (name, id) => {
//     console.log(`new user ${name} is added in database whit ID ${id}`)
// })

// myEmitter.emit('userCreated', "jhon", 7)

// ***************************************/
// UNDERSTANDING STREAMS IN PRACTICE
// ***************************************/

// server.on('request', (req, res) => {
//     let rs = fs.createReadStream("./large.txt")

//     rs.on('data', (chunck) => {
//         res.write(chunck)
//     })
//     rs.on('end', () => {
//         res.end()
//     })

//     rs.on('error', (error) => {
//         res.end(error.message)
//     })
// })


// ********** CODE EXAMPLE**************
// UNDERSTANDING PIPE() METHOD
// *************************************/

// server.listen(8080, '127.0.0.1', () => {
//     console.log('server has started')
// })

// server.on('request', (req, res) => {
//     let rs = fs.createReadStream("./large.txt")
//     rs.pipe(res)
// })

/*LECTURE 29: CODE EXAMPLE**************
EVENT LOOP IN PRACTICE
***************************************/


// console.log('Program has started')

// //STORED - 2ND PHASE
// fs.readFile('./Files/input.txt', () => {
//     console.log('File read complete!');

//     //STORED IN - 1ST PHASE
//     setTimeout(() => {
//         console.log('Timer callback executed')
//     }, 0);

//     //STORED IN - 3RD PHASE
//     setImmediate(() => {console.log('SetImmediate callback executed')});

//     process.nextTick(() => {console.log('Process.nextTick callback executed')})
// })

// console.log('Program has completed')