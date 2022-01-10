const User = require('../models/User')
const bcrypt = require('bcrypt')

exports.sayHello = (req, res) => {
    res.send({
        msg: 'Bonjour Monsieur'
    })
}

exports.create = (req, res) => {
    // console.log(req.body)
    const { name, email, password } = req.body
    User.findOne({ email })
        .then(user => {
            if (user) {
                return res.status(400).json({
                    msg: 'User already exists'
                })
            }
            const newUser = new User({
                name,
                email,
                password
            })
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err
                    newUser.password = hash
                    newUser.save()
                        .then(user => {
                            res.json(user)
                        })
                        .catch(err => console.log(err))
                })
            })
        })
        .catch(err => console.log(err))
        
}