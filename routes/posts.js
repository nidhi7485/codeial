const express = require('express')

const router = express.Router()
const passport = require('passport')
const posts = require('../controller/postController')

router.post('/create', passport.checkAuthentication, posts)
module.exports = router
