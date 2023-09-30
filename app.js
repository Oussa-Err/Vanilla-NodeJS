const { response } = require("express")
const fs = require("fs")
const http = require('http')


const html = fs.readFileSync("./Template/index.html", "utf-8")
let products = JSON.parse(fs.readFileSync("./Data/products.json", "utf-8"))
let productListHtml = fs.readFileSync("./Template/product-list.html", "utf-8")

let productHtmlArray = products.map((prod) => {
    let output = productListHtml.replace("{{%MODELIMAGE%}}", prod.productImage)
    output = output.replace('{{%PHONENAME%}}', prod.name)
    output = output.replace('{{%MODELNAME%}}', prod.modeName)
    output = output.replace('{{%MODELNO%}}', prod.modelNumber)
    output = output.replace('{{%MODELSIZE%}}', prod.size)
    output = output.replace('{{%CAMERA%}}', prod.camera)
    output = output.replace('{{%PRICE%}}', prod.price)
    output = output.replace('{{%COLOR%}}', prod.color)

    return output
})

const server = http.createServer((request, response) => {
    const path = request.url
    if (path === '/' || path.toLocaleLowerCase() === "/home") {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'My-Header': 'hello world'
        })
        response.end(html.replace('{{%CONTENT%}}', 'You are in the Home page'))
    }
    else if (path.toLocaleLowerCase() === "/about") {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'My-Header': 'hello world'
        })
        response.end(html.replace("{{%CONTENT%}}", `you are in the about page`))
    }
    else if (path.toLocaleLowerCase() === "/contact") {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'My-Header': 'hello world'
        })
        response.end(html.replace("{{%CONTENT%}}", `you are in the contact page`))
    }
    else if (path.toLocaleLowerCase() === '/products') {
        let productResponseArray = html.replace('{{%CONTENT%}}', productHtmlArray.join(','))
        response.writeHead(200, {
            'Content-Type': 'text/html',
        })
        response.end(productResponseArray)
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