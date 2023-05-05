const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is must"]
    },
    brand: {
        type: String,
        required: [true, "Brand is must"]
    },
    price: {
        type: Number,
        required: [true, "Price is must"]
    },
    description: {
        type: String,
    },
    productImage: {
        type: String
    },
    addedBy: {
        type: String,
        required: [true, "Added by is must"]
    },
    available: {
        type: Boolean,
        default: true
    }
},{ timestamps: true })

module.exports = mongoose.model('Product', productSchema)