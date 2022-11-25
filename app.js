require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT || 5000

// db
const connectDB = require('./db/connectDB')
// rest all packages
const morgan = require('morgan')

// middleware
const notFound = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/errorHandler')
// routes
const authRouter = require('./routes/authRoutes')
const userRouter = require('./routes/usersRoutes')
app.use(express.json())
app.use(morgan('tiny'))
app.get('/', (req, res) => {
  res.send('zindgi barbaad ho gya!!!')
})
app.use('/', authRouter)
app.use('/', userRouter)

app.use(notFound)
app.use(errorHandlerMiddleware)
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
