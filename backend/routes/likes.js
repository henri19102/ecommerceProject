const express = require("express");
const models = require("../models");
const Like = models.Like;

const router = express.Router();

router.get("/", async (req, res) => {
  const likes = await Like.findAll();
  return res.json(likes);
});

router.post("/", async (req, res) => {
  try {
    const like = {
      userId: req.body.userId,
      reviewId: req.body.reviewId
    };
    const newLike = await Like.create(like);
    res.status(201).send(newLike);
  } catch (e) {
    res.status(500).send();
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const like = await Like.findOne({ where: { id: req.params.id } });
    await like.destroy();
    res.status(204).end();
  } catch (e) {
    console.log("error", e);
  }
});

module.exports = router;
