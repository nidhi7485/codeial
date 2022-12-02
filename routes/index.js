const express = require('express')

const router = express.Router()
const home = require('../controller/homeController')
router.get('/', home)
router.use('/users', require('./usersRoute'))
router.use('/posts', require('./posts'))
module.exports = router
