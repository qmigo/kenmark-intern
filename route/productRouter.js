const productRouter = require('express').Router()
const {
    createProduct, getAllProducts, getProduct, updateProduct, deleteProduct
} = require('../controller/product')

productRouter.route('/').get(getAllProducts).post(createProduct)
productRouter.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct)

module.exports = productRouter