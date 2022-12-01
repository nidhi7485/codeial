const express = require('express')

const router = express.Router()
const passport = require('passport')
const {
  profile,
  signUp,
  signIn,
  create,
  createSession,
} = require('../controller/usersController')
router.get('/profile', profile)
router.get('/signup', signUp)
router.get('/signin', signIn)
router.post('/create', create)
router.post(
  '/create-session',
  passport.authenticate('local', { failureRedirect: '/users/signin' }),
  createSession
)
module.exports = router
