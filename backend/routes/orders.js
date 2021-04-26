const express = require('express')
const models = require('../models')
const Order = models.Order

const router = express.Router()

router.get('/', async (req, res) => {
    const orders = await Order.findAll()
    return res.json(orders)
})

router.get('/:id', async (req, res) => {
    const orders = await Order.findAll({
        where: {
          userId: req.params.id
        }
      })
    return res.json(orders)
})

router.post('/', async (req, res) => {
    try {
        const order = {
            userId: req.body.userId,
            productId: req.body.productId
        };
        await Order.create(order);
        res.status(201).send();
      } catch {
        res.status(500).send();
      }
})

router.delete('/delete/:id', async (req, res) => {
    await Order.destroy({
        where: {
          userId: req.params.id,
          id: req.body.id,
          productId: req.body.productId
        }
      })
      res.status(204).end()
})

module.exports = router