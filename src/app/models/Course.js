const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true, maxLength: 255 },
  description: { type: String, required: true },
  image: { type: String, unique: true, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Course', courseSchema)
