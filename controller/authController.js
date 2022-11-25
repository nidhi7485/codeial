const User = require('../models/User')
const { jwtToken } = require('../utils')
const register = async (req, res) => {
  console.log(req.body)
  const user = await User.create(req.body)
  const userToken = { name: user.name, userId: user._id, email: user.email }
  const token = jwtToken({ payload: userToken })
  const oneDay = 1000 * 60 * 60 * 24
  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
  })
  res.status(200).json({ user: userToken })
}

module.exports = { register }
