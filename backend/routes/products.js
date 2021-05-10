const express = require("express");
const models = require("../models");
const Product = models.Product;

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.findAll();
  res.setHeader("Content-Range", "1");
  return res.json(products);
});

router.get("/:id", async (req, res) => {
  const product = await Product.findOne({ where: { id: req.params.id } });
  return res.json(product);
});

router.post("/", async (req, res) => {
  try {
    const product = {
      name: req.body.name,
      price: req.body.price,
      count: req.body.count,
      category: req.body.category,
    };
    const newProduct = await Product.create(product);
    res.status(201).send(newProduct);
  } catch {
    res.status(500).send();
  }
});

router.delete("/:id", async (req, res) => {
    try {
        const product = await Product.findOne({ where: { id: req.params.id } });
        await product.destroy();
        res.status(204).end();
    } catch (e){
        console.log("error")
    }
  
});

router.put("/:id", async (req, res) => {
  const {name, price, count, category} = req.body
  const product = await Product.findOne({ where: { id: req.params.id } });
  product.name = name;
  product.price = price;
  product.count = count;
  product.category = category;
  await product.save()
  return res.json(product);
});

module.exports = router;
