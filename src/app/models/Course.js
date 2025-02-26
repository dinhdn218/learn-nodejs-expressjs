const mongoose = require('mongoose')
const slugify = require('slugify')

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true, maxLength: 255 },
  description: { type: String, required: true },
  image: { type: String, required: true },
  slug: { type: String, unique: true, required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

courseSchema.pre('save', function (next) {
  if (this.name) {
    this.slug = slugify(this.name, { lower: true, strict: true })
  }
  next()
})

module.exports = mongoose.model('Course', courseSchema)
