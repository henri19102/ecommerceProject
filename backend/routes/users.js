import express from 'express'
import User from '../models/User.js'

const router = express.Router()

router.get('/', async (req, res) => {
    const users = await User.findAll()
    return res.json(users)
})

export default router