const express = require('express')

const router = express.Router()
const passport = require('passport')
const {
  profile,
  signUp,
  signIn,
  create,
  createSession,
  destroySession,
  updateUser,
} = require('../controller/usersController')
router.get('/profile/:id', passport.checkAuthentication, profile)
router.get('/signup', signUp)

router.get('/signin', signIn)
router.post('/create', create)
router.post(
  '/create-session',
  passport.authenticate('local', { failureRedirect: '/users/signin' }),
  createSession
)
router.post('/update/:id', updateUser)
router.get('/signOut', destroySession)
module.exports = router
