const express = require('express')

const router = express.Router()

const userController = require('../controller/usersController')
router.get('/profile', userController)

module.exports = router
