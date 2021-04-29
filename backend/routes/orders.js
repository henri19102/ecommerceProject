const express = require('express')
const { sequelize } = require('../models')
const models = require('../models')
const Order = models.Order

const router = express.Router()

router.get('/', async (req, res) => {
    const orders = await Order.findAll()
    return res.json(orders)
})

router.get('/user/:id', async (req, res) => {
  const orders = await Order.findAll({
    attributes: [
      'userId', 'productId',
      [sequelize.fn('COUNT', sequelize.col('*')), 'productCount']
    ],
    where: {userId: req.params.id},
    group: ["productId", "userId"]
  })
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
  console.log(req.body)
    await Order.destroy({
        where: {
          id: req.params.id
        }
      })
      res.status(204).end()
})

module.exports = router