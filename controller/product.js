const Product = require('../model/Product')
const customAPIError = require('../error/custom-error')

const createProduct = async (req, res)=>{
    const {title, brand, price, addedBy} = req.body

    if(!title || !brand || !price || !addedBy )
    throw new customAPIError(300, "All required fields are must")

    const product =  await Product.create(req.body)

    res.status(200).json({ product })
}

const getAllProducts = async(req, res)=>{
    const products = await Product.find({})
    res.status(200).json({ products })
}

const getProduct = async(req, res)=>{
    const {id} = req.params
    if(!id)
    throw new customAPIError(300, "Product Id is must")

    const product = await Product.findById(id)
    res.status(200).json({ product })
}

const updateProduct = async(req, res)=>{
    const {id} = req.params
    if(!id)
    throw new customAPIError(300, "Product Id is must")

    const product = await Product.findByIdAndUpdate(id, req.body, {
        runValidators: true, new: true
    })

    res.status(200).json({ product })
}

const deleteProduct = async(req, res)=>{
    const {id} = req.params
    if(!id)
    throw new customAPIError(300, "Product Id is must")

    await Product.findByIdAndDelete(id)
    res.status(200).json({ msg: "Product Deleted" })
}

module.exports = {
    createProduct, getAllProducts, getProduct, updateProduct, deleteProduct
}