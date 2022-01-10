const express = require('express')
const route = express.Router()
const UserController = require('../controllers/UserController')

route.get('/api/user/hello', UserController.sayHello)

route.post('/api/user/create', UserController.create)

module.exports = route