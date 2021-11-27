const bcrypt = require('bcryptjs')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

async function createUser(email, password, name) {
  const response = await User.create({
    email,
    password,
    name,
  })
  console.log('User created successfully: ', response)
}

async function findUser(email) {
  return await User.findOne({ email })
}

async function hashPassword(plainTextPassword) {
  const password = await bcrypt.hash(plainTextPassword, 10)
  return password
}

async function compareHash(password1, password2) {
  return await bcrypt.compare(password1, password2)
}

async function createToken(userID, userName) {
  return jwt.sign(
    { id: userID, name: userName },
    process.env.ACCESS_TOKEN_SECRET
  )
}

async function verifyToken(token) {
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
}
module.exports = {
  createUser,
  findUser,
  hashPassword,
  compareHash,
  createToken,
  verifyToken,
}
