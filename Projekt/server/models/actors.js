const mongoose = require('mongoose')
const { Schema } = mongoose

const actorsSchema = new Schema(
  {
    birthName: { type: String },
    height: { type: String },
    pic: { type: String },
    info: {
      dateOfBorn: {
        day: { type: Number },
        month: { type: String },
        year: { type: Number },
      },
      country: { type: String },
      state: { type: String },
      city: { type: String },
    },
    bio: { type: String },
  },
  { collection: 'actors' }
)

module.exports = mongoose.model('actors', actorsSchema)
