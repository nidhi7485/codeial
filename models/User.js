const mongoose = require('mongoose')
const multer = require('multer')
const path = require('path')
const AVATAR_PATH = path.join('/uploads/users/avatars')
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)
