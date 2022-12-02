const express = require('express')

const router = express.Router()
const passport = require('passport')
const comments = require('../controller/commentController')

router.post('/create', passport.checkAuthentication, comments)
module.exports = router
