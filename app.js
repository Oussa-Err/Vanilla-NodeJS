const mongoose = require('mongoose')
const express = require('express')
const app = express()




const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send('hello world')
})

app.patch('/api/v1', (req, res) => {
    req.fetch()
    
    next()
})

app.get('/home', (req, res) => {
    res.send({message:  'hello home' })
})


console.log("hello there!")
app.listen(port, console.log(`the server is listening on port ${port}`))