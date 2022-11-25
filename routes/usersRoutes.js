const express = require('express')
const router = express.Router()

const { logIn } = require('../controller/userController')

router.route('/login').post(logIn)
module.exports = router
