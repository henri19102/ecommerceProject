const express = require('express')
const models = require('../models')
const Rating = models.Rating

const router = express.Router()

router.get('/', async (req, res) => {
    const ratings = await Rating.findAll()
    return res.json(ratings)
})

router.post('/', async (req, res) => {
    try {
        const rating = {
            userId: req.body.userId,
            productId: req.body.productId,
            starRating: req.body.starRating
        };
        const newRating = await Rating.create(rating);
        res.status(201).send(newRating);
      } catch {
        res.status(500).send();
      }
})

module.exports = router