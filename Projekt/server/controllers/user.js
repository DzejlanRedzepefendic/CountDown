const asyncWrapper = require('../middlewares/async')
const {
  hashPassword,
  createUser,
  compareHash,
  findUser,
} = require('../services/user')

const { verifyToken, createAccessToken } = require('../services/session')

const register = asyncWrapper(async (req, res) => {
  const { email, password: plainTextPassword, name } = await req.body
  const password = await hashPassword(plainTextPassword)

  try {
    await createUser(email, password, name)
  } catch (error) {
    if (error.code === 11000) {
      return res.json({ status: 'error', error: 'Email already in use' })
    }

    throw error
  }
  res.json({ status: 'ok', message: 'You have been registered successfully' })
})

const login = asyncWrapper(async (req, res) => {
  const { email, password } = await req.body
  const user = await findUser(email)

  if (!user) {
    return res
      .status(203)
      .json({ status: 'error', error: 'Invalid username/password' })
  }

  if (await compareHash(password, user.password)) {
    const token = await createAccessToken(user._id, user.name)
    return res.json({ status: 'ok', data: token })
  }
  res.json({ status: 'error', error: 'Invalid username/password' })
})

const logout = asyncWrapper(async (req, res) => {
  const { token } = await req.body
  const user = await verifyToken(token)
  if (!user) {
    res.status(401).json({ error: '' })
  }
})

module.exports = { register, login, logout }
