const express = require('express')
const app = express()
const { typeError } = require('./middlewares/error')
const { dbConnection } = require('./config/config')
require('dotenv').config()

const PORT = process.env.PORT || 3001

app.use(express.json())
dbConnection()

app.use('/products', require('./routes/products'))
app.use('/users', require('./routes/users'))
app.use('/orders', require('./routes/orders'))

app.use(typeError)

app.listen(PORT, () => `Server started at por t${PORT}`)
