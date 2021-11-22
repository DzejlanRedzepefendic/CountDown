const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./db/connect')
const login = require('./routes/login')
const register = require('./routes/register')
const app = express()
const jwt = require('jsonwebtoken')
app.use(express.json())
PORT = process.env.PORT
app.use('/ping', (req, res) => {
  res.send('Pong')
})
app.use('api/register', register)
app.use('api/login', login)
const start = async () => {
  try {
    await connectDB(process.env.mongoURL)
    app.listen(PORT, console.log(`Server is Listening on port ${PORT}`))
    console.log('Database Connected')
  } catch (error) {
    console.log(error)
  }
}

start()
