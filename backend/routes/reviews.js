const express = require('express')
const models = require('../models')
const Review = models.Review

const router = express.Router()

router.get('/', async (req, res) => {
    const reviews = await Review.findAll()
    res.setHeader('Content-Range', '1')
    return res.json(reviews)
})

router.post('/', async (req, res) => {
    try {
        const review = {
            userId: req.body.userId,
            productId: req.body.productId,
            reviewText: req.body.reviewText
        };
        const newReview = await Review.create(review);
        res.status(201).send(newReview);
      } catch {
        res.status(500).send();
      }
})

module.exports = router