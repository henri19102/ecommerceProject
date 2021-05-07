const express = require('express')
const models = require('../models')
const Review = models.Review

const router = express.Router()

router.get('/', async (req, res) => {
    const reviews = await Review.findAll()
    return res.json(reviews)
})

module.exports = router