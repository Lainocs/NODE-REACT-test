const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')
const http = require('http')

const connectDB = require('./server/database/connexion')

dotenv.config({ path: './.env' })
const PORT = process.env.PORT || 7000

const app = express()

app.use(express.static('client/build'))

connectDB()

app.use(bodyparser.urlencoded({ extended: true }))

app.use(express.json())

app.use('/', require('./server/routes/router'))

app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(process.env.PORT || 7000, () => {
    console.log(`Server is running`)
})