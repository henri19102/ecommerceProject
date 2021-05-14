const express = require('express')
const models = require('../models')
const Like = models.Like
const Rating = models.Rating
const User = models.User

const router = express.Router()

router.get('/', async (req, res) => {
    const likes = await Like.findAll()
    return res.json(likes)
})

router.post('/', async (req, res) => {
    try {
        const like = {
            userId: req.body.userId,
            reviewId: req.body.reviewId,
        };
        const newLike = await Like.create(like);
        res.status(201).send(newLike);
      } catch {
        res.status(500).send();
      }
})



module.exports = router