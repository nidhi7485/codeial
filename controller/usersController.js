const User = require('../models/User')

const profile = async (req, res) => {
  const id = req.params.id
  const user = await User.findById(id)

  console.log(user)
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
  // console.log(req.body.password)
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
    let user = await User.findById(req.params.id)
    User.uploadAvatar(req, res, function (err) {
      if (err) {
        console.log('err')
      }
      user.name = req.body.name
      user.emailreq.body.email
      if (req.file) {
        user.avatar = User.avatarPath + '/' + req.file.filename
      }
      user.save()
      return res.redirect('back')
    })
  }
}
const createSession = function (req, res) {
  req.flash('success', 'Logged in successfully')
  return res.redirect('/')
}
const destroySession = function (req, res) {
  req.logout((err) => console.log(err))
  req.flash('success', 'logged out ')
  return res.redirect('/')
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
