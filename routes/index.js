const { application } = require('express')
const express = require('express')

const router = express.Router()
const home = require('../controller/homeController')
router.get('/', home)
router.use('/users', require('./usersRoute'))
router.use('/posts', require('./posts'))
router.use('/comment', require('./comment'))
module.exports = router
