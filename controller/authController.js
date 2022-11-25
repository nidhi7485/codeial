const User = require('../models/User')

const register = async (req, res) => {
  console.log(req.body)
  const user = await User.create(req.body)
  res.status(200).json({ user })
}

module.exports = { register }
