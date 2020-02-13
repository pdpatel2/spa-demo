const router = require('express').Router()

router.use('/pizzas', require('./pizzas'))

module.exports = router
