const express = require('express')
const models = require('../models')
const Product = models.Product

const router = express.Router()

router.get('/', async (req, res) => {
    const products = await Product.findAll()
    return res.json(products)
})

module.exports = router