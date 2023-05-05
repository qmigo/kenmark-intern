const orderRouter = require('express').Router()
const {
    createOrder, getAllOrders, getOrder
} = require('../controller/order')

orderRouter.route('/').post(createOrder).get(getAllOrders)
orderRouter.route('/:id').get(getOrder)

module.exports = orderRouter