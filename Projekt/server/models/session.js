const mongoose = require('mongoose')
const { Schema } = mongoose

const sessionScheme = new Scheme(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    valid: { type: Boolean, default: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Session', sessionScheme)
