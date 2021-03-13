import express from 'express'
import db from '../config/database.js'
import Product from '../models/Product.js'

const router = express.Router()

router.get('/', async (req, res) => {
    const products = await Product.findAll()
    return res.json(products)
})

export default router