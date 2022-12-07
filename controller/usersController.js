const User = require('../models/User')
const profile = async (req, res) => {
  const user = User.findById(req.params.id)
  return res.render('userProfile', {
    title: 'Profile',
    user_profile: user,
  })
}
const signUp = async (req, res) => {
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
const create = async function (req, res) {
  console.log(req.body.password)
  if (req.body.password != req.body.confirm_password) {
    return res.redirect('back')
  }
  const user = await User.findOne({ email: req.body.email })

  if (!user) {
    console.log(req.body)
    User.create(req.body)
    return res.redirect('/users/signin')
  } else {
    console.log(req.body)
    return res.redirect('back')
  }
}

const updateUser = async function (req, res) {
  if (req.user.id == req.params.id) {
    User.findByIdAndUpdate(req.params.id, req.body)
    return res.redirect('back')
  } else {
    return res.status(401).send('Unauthorized')
  }
}
const createSession = function (req, res) {
  req.flash('success', 'Logged in successfully')
  return res.redirect('/')
}
const destroySession = function (req, res) {
  req.logout()
  req.flash('success', 'logged out successfully')
  res.redirect('/')
}

module.exports = {
  profile,
  signUp,
  signIn,
  create,
  createSession,
  destroySession,
  updateUser,
}
