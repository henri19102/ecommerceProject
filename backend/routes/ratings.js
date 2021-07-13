const express = require("express")
const models = require("../models")
const Rating = models.Rating

const router = express.Router()

router.get("/", async (req, res) => {
  const ratings = await Rating.findAll()
  res.setHeader("Content-Range", "1")
  return res.json(ratings)
})

router.post("/", async (req, res) => {
  try {
    const rating = {
      userId: req.body.userId,
      productId: req.body.productId,
      starRating: req.body.starRating
    }
    const newRating = await Rating.create(rating)
    res.status(201).send(newRating)
  } catch (e) {
    res.status(500).send()
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const rating = await Rating.findOne({ where: { id: req.params.id } })
    await rating.destroy()
    res.status(204).end()
  } catch (e) {
    console.log("error")
  }
})

module.exports = router
