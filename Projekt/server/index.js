const express = require('express')
const dotenv = require('dotenv').config()
const login = require('./routes/login')
const register = require('./routes/register.js')
const actor = require('./routes/actor.js')
const errorHandlerMiddleware = require('./middlewares/error-handler')
const notFound = require('./middlewares/not-found')
const connectDB = require('./db/connect')
const jwt = require('jsonwebtoken')
const app = express()
app.use(express.json())
app.use('/api/register', register)
app.use('/api/login', login)
app.use('/api/v1/actor', actor)
app.use('/ping', (req, res) => {
  res.send('Pong')
})

app.use(notFound)
app.use(errorHandlerMiddleware)
PORT = process.env.PORT
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
