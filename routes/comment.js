const express = require('express')

const router = express.Router()
const passport = require('passport')
const {
  commentCreate,
  commentDestroy,
} = require('../controller/commentController')

router.post('/create', passport.checkAuthentication, commentCreate)
router.get('/destroy/:id', commentDestroy)
module.exports = router
