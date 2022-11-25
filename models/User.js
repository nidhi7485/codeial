const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'please provide email'],
  },
  password: {
    type: String,
    required: [true, 'please provide password'],
  },
})

module.exports = mongoose.model('User', UserSchema)
