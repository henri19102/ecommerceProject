const express = require('express')
const db = require('../config/database')
const Product = require('../models/Product')

const router = express.Router()

router.get('/', async (req, res) => {
    const products = await Product.findAll()
    return res.json(products)
})

module.exports = router