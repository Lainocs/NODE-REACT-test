const express = require('express')
const path = require('path')
require('dotenv').config()

const PORT = process.env.PORT || 7000

const app = express()

app.use(express.json())

app.use(express.static('client/build'))

app.get('/api/hello', (req, res) => { 
    res.send({
        msg: 'Bonjour Monsieur'
    }) 
})

app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(7000, () => {
    console.log(`Server is running on port : ${PORT}`)
})