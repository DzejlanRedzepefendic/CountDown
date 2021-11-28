const mongoose = require('mongoose')
const { Schema } = mongoose

const actorsSchema = new Schema(
  {
    birthName: { type: String },
    height: { type: String },
    pic: { type: String },
    bio: { type: String },
    dateOfBorn: {
      day: { type: Number },
      month: { type: String },
      year: { type: Number },
    },
    country: { type: String },
    state: { type: String },
    city: { type: String },
  },
  {
    collection: 'actor',
    writeConcern: {
      j: true,
      wtimeout: 1000,
    },
  }
)

module.exports = mongoose.model('Actor', actorsSchema)
