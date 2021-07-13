const express = require("express")
const models = require("../models")
const Review = models.Review
const User = models.User
// const { sequelize } = require("../models")

const router = express.Router()

router.get("/", async (req, res) => {
  const reviews = await Review.findAll({
    include: {
      model: User,
      attributes: ["name"]
    }
  })
  res.setHeader("Content-Range", "1")
  return res.json(reviews)
})

router.post("/", async (req, res) => {
  try {
    const review = {
      userId: req.body.userId,
      productId: req.body.productId,
      reviewText: req.body.reviewText
    }
    const newReview = await Review.create(review)
    res.status(201).send(newReview)
  } catch (e) {
    res.status(500).send()
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const review = await Review.findOne({ where: { id: req.params.id } })
    await review.destroy()
    res.status(204).end()
  } catch (e) {
    console.log("error")
  }
})

module.exports = router
