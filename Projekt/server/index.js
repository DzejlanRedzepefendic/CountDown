const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./db/connect')
const app = express()
app.use(express.json())
PORT = process.env.PORT
app.use('/ping', (req, res) => {
  res.send('Pong')
})

const start = async () => {
  try {
    await connectDB(process.env.mongoURL)
    app.listen(PORT, console.log(`Server is Listening on port ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start()
