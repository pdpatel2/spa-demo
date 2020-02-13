const router = require('express').Router()
const {Pizza} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const pizzas = await Pizza.findAll()
    res.json(pizzas)
  } catch(err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newPizza = await Pizza.create(req.body)
    res.send(newPizza)
  } catch(err) {
    next(err)
  }
})

module.exports = router
