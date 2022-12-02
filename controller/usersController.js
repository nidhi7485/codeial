const User = require('../models/User')
const profile = (req, res) => {
  return res.render('userProfile', {
    title: 'Profile',
  })
}
const signUp = (req, res) => {
  if (req.isAuthenticated()) {
    return res.redirect('/users/profile')
  }
  return res.render('signUp', {
    title: 'SignUp',
  })
}
const signIn = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect('/users/profile')
  }
  return res.render('signIn', {
    title: 'SignIn',
  })
}
const create = function (req, res) {
  console.log(req.body.password)
  if (req.body.password != req.body.confirm_password) {
    return res.redirect('back')
  }
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log('err in finding in signing up')
    }
    if (!user) {
      console.log(req.body)
      User.create(req.body)
      return res.redirect('/users/signin')
    } else {
      console.log(req.body)
      return res.redirect('back')
    }
  })
}
const createSession = function (req, res) {
  return res.redirect('/')
}
const destroySession = function (req, res) {
  req.logout(function (err) {
    if (err) {
      console.log(err)
    }
    res.redirect('/')
  })
}
module.exports = {
  profile,
  signUp,
  signIn,
  create,
  createSession,
  destroySession,
}
