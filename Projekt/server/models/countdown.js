const mongoose = require('mongoose')
const { Schema } = mongoose

const countDownSchema = new Schema(
  {
    title: { type: String },
    url: { type: String },
    genre: { type: Array },
    about: { type: String },
    youtubeURL: { type: String },
    imdb_score: { type: Number },
    created_at: { type: Date },
    air_date: {
      year: { type: Number },
      month: { type: String },
      day: { type: Number },
      hour: { type: Number },
      minutes: { type: Number },
    },
    updated_at: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
  },
  {
    collection: 'countdown',
    writeConcern: {
      j: true,
      wtimeout: 1000,
    },
  }
)

module.exports = mongoose.model('Countdown', countDownSchema)
