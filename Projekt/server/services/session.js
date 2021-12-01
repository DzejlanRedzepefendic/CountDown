const Session = require('../models/session')

async function createAccessToken(userID, userName) {
  return jwt.sign(
    { id: userID, name: userName },
    process.env.ACCESS_TOKEN_SECRET
  )
}

async function verifyToken(token) {
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
}

module.exports = {
  createAccessToken,
  verifyToken,
}
