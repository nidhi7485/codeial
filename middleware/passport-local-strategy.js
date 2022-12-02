const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
    },
    function (email, password, done) {
      // find user and established the identity
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
  User.findById(id, function (err, user) {
    if (err) {
      console.log('error in finding --->passport')
      return done(err)
    }
    return done(null, user)
  })
})

// check if the user is authenticated
passport.checkAuthentication = function (req, res, next) {
  // if the user is signind ,then pass the request to the next function(controller's action)
  if (req.isAuthenticated()) {
    return next()
  }
  return res.redirect('/users/signin')
}

passport.setAuthenticatedUser = function (req, res, next) {
  if (req.isAuthenticated()) {
    //  req.user contains current signned user from the session cookie and we are just sending this to the locals
    res.locals.user = req.user
  }
  next()
}

module.exports = passport
