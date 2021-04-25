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

router.post('/:id', async (req, res) => {
    try {
        const order = {
            userId: req.params.id,
            productId: req.body.id
        };
        await Order.create(order);
        res.status(201).send();
      } catch {
        res.status(500).send();
      }
})

router.delete('/delete', async (req, res) => {
    await Order.destroy({
        where: {
          userId: 9,
          id: 3,
          productId: 5
        }
      })
      res.status(204).end()
})

module.exports = router