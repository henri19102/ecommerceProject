const express = require('express')
const models = require('../models')
const Order = models.Order

const router = express.Router()

router.get('/', async (req, res) => {
    const orders = await Order.findAll()
    return res.json(orders)
})

router.get('/user', async (req, res) => {
    const orders = await Order.findAll({
        where: {
          userId: req.body.id
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

router.delete('/delete', async (req, res) => {
  console.log(req.body)
    await Order.destroy({
        where: {
          id: req.body.id,
        }
      })
      res.status(204).end()
})

module.exports = router