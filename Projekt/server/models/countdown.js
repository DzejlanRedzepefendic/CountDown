const mongoose = require('mongoose')
const { Schema } = mongoose

const countDownSchema = new Schema(
  {
    title: { type: String },
    url: { type: String },
    genre: { type: String },
    info: { type: String },
    about: { type: String },
    imdb_score: { type: Number },
    created_at: { type: Date },
    updated_at: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
  },
  { collection: 'countdown' }
)

module.exports = mongoose.model('CountDown', countDownSchema)
