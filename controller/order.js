const Order = require('../model/Order')
const customAPIError = require('../error/custom-error')

const createOrder = async(req, res)=>{
    const {customerId, billAmount} = req.body
    if(!customerId || !billAmount) 
    throw new customAPIError(300, "All required fields are must")

    const order = await Order.create(req.body)
    res.status(200).json({ order })
}

const getAllOrders = async(req, res)=>{
    const orders = await Order.find({})
    res.status(200).json({ orders })
}

const getOrder = async(req, res)=>{
    const {id} = req.params
    if(!id) 
    throw new customAPIError(300, "Order Id is must")

    const order = await Order.findById(id)
    if(!order)
    throw new customAPIError(400, "Order not found")
    res.status(200).json({ order })
}

module.exports = {
    createOrder, getAllOrders, getOrder
}