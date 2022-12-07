const express = require('express')

const router = express.Router()
const passport = require('passport')
const { userPost, postDestroy } = require('../controller/postController')

router.post('/create', passport.checkAuthentication, userPost)
router.get('/destroy/:id', postDestroy)
module.exports = router
