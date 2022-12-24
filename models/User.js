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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', AVATAR_PATH))
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  },
})
userSchema.statics.uploadAvatar = multer({ storage: storage }).single('avatar')
userSchema.statics.avatarPath = AVATAR_PATH

module.exports = mongoose.model('User', userSchema)
