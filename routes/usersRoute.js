const express = require('express')

const router = express.Router()

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
router.post('/create-session', createSession)
module.exports = router
