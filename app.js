require('dotenv').config()
const express = require('express')

const app = express()
const cookieParser = require('cookie-parser')
const fs = require('fs')
const expressLayouts = require('express-ejs-layouts')
// const fileUpload = require('express-fileupload')
const port = process.env.PORT || 5000

// const cookieParser = require('cookie-parser')

// db
const connectDB = require('./db/connectDB')
// rest all packages
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static('./assets'))
app.use(expressLayouts)
app.set('layout extractStyles', true)
app.set('layout extractScripts', true)
// middleware
const notFound = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/errorHandler')
// routes
app.set('view engine', 'ejs')
app.set('views', './views')
const hRouter = require('./routes/index')
const { urlencoded } = require('express')

// app.use(express.static('./csvfile'))
// app.use(express.json())

// app.use(fileUpload())
app.use('/', hRouter)
// app.use(notFound)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await app.listen(port, () => {
      console.log(`server is listining on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}
start()
