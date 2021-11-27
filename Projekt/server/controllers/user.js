const asyncWrapper = require('../middlewares/async')
const { createCustomError } = require('../errors/custom-error')
const {
  hashPassword,
  createUser,
  compareHash,
  createToken,
  findUser,
  verifyToken,
} = require('../services/user')

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
    return res.json({ status: 'error', error: 'Invalid username/password' })
  }

  if (await compareHash(password, user.password)) {
    const token = await createToken(user._id, user.name)
    return res.json({ status: 'ok', data: token })
  }
  res.json({ status: 'error', error: 'Invalid username/password' })
})

const changePassword = asyncWrapper(async (req, res) => {
  const { token } = await req.body
  const user = await verifyToken(token)
})

module.exports = { register, login, changePassword }
