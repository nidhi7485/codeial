const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('../models/User')

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
    },
    function (email, password, done) {
      User.findOne({ email: email }, function (err, user) {
        if (err) {
          console.log('error in finding in user---> Passport')
          return done(err)
        }
        if (!user || user.password != password) {
          console.log('Invalid username or password')
          return done(null, false)
        }
        return done(null, user)
      })
    }
  )
)

passport.serializeUser(function (user, done) {
  return done(null, user.id)
})

passport.deserializeUser(function (id, done) {
  User.findById(id),
    function (err, user) {
      if (err) {
        console.log('error in finding --->passport')
        return done(Error)
      }
      return done(null, user)
    }
})

module.exports = passport
