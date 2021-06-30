const express = require("express");
const { sequelize } = require("../models");
const models = require("../models");
const Order = models.Order;
const Product = models.Product;

const router = express.Router();

router.get("/", async (req, res) => {
  const orders = await Order.findAll({
    include: {
      model: Product,
      attributes: ["name"],
    },
  });
  res.setHeader("Content-Range", "1");
  return res.json(orders);
});

router.get("/user/:id", async (req, res) => {
  const orders = await Order.findAll({
    include: {
      model: Product,
      attributes: ["name", "price"],
    },
    attributes: [
      "Product.name",
      "Product.price",
      "userId",
      "productId",
      [sequelize.fn("COUNT", sequelize.col("*")), "productCount"],
    ],
    where: { userId: req.params.id },
    group: ["Product.id", "Product.name", "productId", "userId"],
  });
  return res.json(orders);
});

router.get("/:id", async (req, res) => {
  const orders = await Order.findAll({
    where: {
      userId: req.params.id,
    },
  });
  return res.json(orders);
});

router.post("/add", async (req, res) => {
  try {
    const order = {
      userId: req.body.userId,
      productId: req.body.productId,
    };
    const newOrder = await Order.create(order);
    res.status(201).send(newOrder);
  } catch {
    res.status(500).send();
  }
});

router.delete("/", async (req, res) => {
console.log(req.body.all)
  try {
    await Order.destroy({ where: { id: [...req.body.all] } });
    res.status(204).end();
  } catch (e) {
    console.log("error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const order = await Order.findOne({ where: { id: req.params.id } });
    await order.destroy();
    res.status(204).end();
  } catch (e) {
    console.log("error");
  }
});



module.exports = router;
