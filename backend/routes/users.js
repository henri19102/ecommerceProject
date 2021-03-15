const express = require('express')
const models = require('../models')
const bcrypt = require('bcrypt')

const User = models.User

const router = express.Router()

router.get('/', async (req, res) => {
    const users = await User.findAll()
    return res.json(users)
})

router.post('/', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const user = { name: req.body.name, email: req.body.email, password: hashedPassword }
        await User.create(user)
        console.log(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
})

router.post('/login', async (req,res) => {
    const user = await User.findOne({where: {name: req.body.name}})
    if (user == null){
        return res.status(400).send('no user found')
    } try {
        if (await bcrypt.compare(req.body.password, user.password)){
            res.send('logged in')
        } else {
            res.send('wrong password')
        }
    } catch {
        res.status(500).send()
    }
})


module.exports = router