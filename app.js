require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const passport = require('passport')
const LocalStrategy = require('./middleware/passport-local-strategy')
const session = require('express-session')
const port = process.env.PORT || 5000

// db
const connectDB = require('./db/connectDB')
const MongoStore = require('connect-mongo')
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

// mongo store is used to store cookie in db
app.use(
  session({
    name: 'codeial',
    secret: 'secret',
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: MongoStore.create(
      {
        // mongoUrl: 'mongodb://localhost:27017/codial_devlopment',
        mongoUrl: process.env.MONGO_URI,
        autoRemove: 'desabled',
      },
      function (err) {
        console.log(err || 'connect-mongodb setup ok')
      }
    ),
  })
)
app.use(passport.initialize())
app.use(passport.session())
app.use(passport.setAuthenticatedUser)
const hRouter = require('./routes')

app.use('/', hRouter)
app.use(notFound)

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
