require('express-async-errors')
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const mongoose = require('mongoose')
const orderRouter = require('./route/orderRouter')
const productRouter = require('./route/productRouter')
const notFoundMiddleWare = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

const app = express()
const port = process.env.PORT || 5000
const domain = process.env.DOMAIN || `http://localhost:${port}`

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use('/api/v1/order', orderRouter)
app.use('/api/v1/product', productRouter)
app.use(errorHandlerMiddleware)
app.use(notFoundMiddleWare)

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(port, ()=>{
        console.log(`Server started at ${domain}`)
    })
}).catch((err)=>{
    console.log(err)
})
