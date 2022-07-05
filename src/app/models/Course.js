const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: { type: String },
  description: { type: String },
  thumbnail: { type: String },
  slug: { type: String },
  videoId: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const CourseModel = mongoose.model('Course', courseSchema);

module.exports = CourseModel;
