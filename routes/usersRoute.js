const express = require('express')

const router = express.Router()

const {
  profile,
  signUp,
  signIn,
  create,
} = require('../controller/usersController')
router.get('/profile', profile)
router.get('/signup', signUp)
router.get('/signin', signIn)
router.post('/create', create)
module.exports = router
