const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema(
  {
    email: {
      type: String,
      index: { unique: true },
      required: true,
    },
    password: { type: String, required: true },
    name: { type: String, required: true },
  },
  { collection: 'user' }
)

module.exports = mongoose.model('User', UserSchema)
