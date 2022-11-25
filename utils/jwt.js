const jwt = require('jsonwebtoken')

const jwtToken = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '30d' })
  return token
}
const jwtVarify = ({ token }) => {
  jwt.verify(token, process.env.JWT_SECRET)
}

module.exports = { jwtToken, jwtVarify }
