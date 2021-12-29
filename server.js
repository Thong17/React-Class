require('dotenv').config()

const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/', require('./routers/home'))

app.listen(process.env.PORT, process.env.SERVER, () => console.log(`Running on ${process.env.SERVER}:${process.env.PORT}`))