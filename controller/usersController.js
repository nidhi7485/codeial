const User = require('../models/User')
const profile = (req, res) => {
  return res.render('userProfile', {
    title: 'Profile',
  })
}
const signUp = (req, res) => {
  return res.render('signUp', {
    title: 'SignUp',
  })
}
const signIn = (req, res) => {
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
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log('err in finding in signing up')
    }
    if (user) {
      if (user.password != req.body.password) {
        return res.redirect('back')
      }
      res.cookie('user_id', user.id)
      return res.redirect('/users/profile')
    } else {
      return res.redirect('back')
    }
  })
}
module.exports = { profile, signUp, signIn, create, createSession }
