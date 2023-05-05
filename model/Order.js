const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Types.ObjectId,
        required: [true, "Customer Id is must"],
    },
    products: {
        type: [{ 
            productId: {
                type: mongoose.Types.ObjectId,
                required: [true, "Product Id for every item in order is must"]
            },
            quantity: {
                type: Number,
                required: [true, "Quantity is must"]
            } 
        }],
    },
    totalItems: {
        type: Number,
        default: 0
    },
    billAmount: {
        type: Number,
        required: [true, "A bill amount is must"]
    },
    shippingAddress:{
        type: String,
        required: [true, "A shipping address is must"]
    },
    refundable:{
        type: Boolean,
        default: false
    }
},{ timestamps: true })

module.exports = mongoose.model('Order', orderSchema)