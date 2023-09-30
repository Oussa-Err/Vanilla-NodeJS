const fs = require("fs")
const http = require('http')


const html = fs.readFileSync("./index.html", "utf-8")
let products = JSON.parse(fs.readFileSync("./Data/products.json", "utf-8"))

const server = http.createServer((request, response) => {
    const path = request.url
    if (path === '/' || path.toLocaleLowerCase() === "/home") {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'My-Header': 'hello world'
        })
        response.end(html.replace("{{%CONTENT%}}", `you are in the Home page`))

    }
    else if (path.toLocaleLowerCase() === "/contact") {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'My-Header': 'hello world'
        })
        response.end(html.replace("{{%CONTENT%}}", `you are in the contact page`))
    }
    else if (path.toLocaleLowerCase() === "/about") {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'My-Header': 'hello world'
        })
        response.end(html.replace("{{%CONTENT%}}", `you are in the about page`))
    }
    else if (path.toLocaleLowerCase() === '/products') {
        response.writeHead(200, {
            'Content-Type': 'text/html',
        })
        response.end('you are in product page')
        console.log(products)
    }
    else {
        response.writeHead(404,
            {
                'Content-Type': 'text/html'
            }
        )
        response.end(html.replace("{{%CONTENT%}}", `404: page not found`))
    }
})


server.listen(3000, '127.0.0.1', () => {
    console.log('server has started')
})