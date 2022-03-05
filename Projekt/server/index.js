const express = require('express')
const dotenv = require('dotenv').config()
const login = require('./routes/login')
const register = require('./routes/register.js')
const actor = require('./routes/actor.js')
const countdown = require('./routes/countdown.js')
const errorHandlerMiddleware = require('./middlewares/error-handler')
const notFound = require('./middlewares/not-found')
const connectDB = require('./db/connect')
const jwt = require('jsonwebtoken')
const cors = require('cors')
// const cookieParser = require('cookie-parser')

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}
const app = express()

app.use(cors(corsOptions))
app.use(express.json())

app.use('/api/v1/register', register)
app.use('/api/v1/login', login)
app.use('/api/v1/actor', actor)
app.use('/api/v1/countdown', countdown)
app.use('/ping', (req, res) => {
  res.send('Pong')
})

app.use(notFound)
app.use(errorHandlerMiddleware)

PORT = process.env.PORT
DB = process.env.mongoURL

const start = async () => {
  try {
    await connectDB(DB)
    app.listen(PORT, console.log(`Server is Listening on port ${PORT}`))
    console.log('Database Connected')
  } catch (error) {
    console.log(error)
  }
}

start()
