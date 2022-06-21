const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Course = new Schema({
  title: { type: String },
  description: { type: String },
  thumbnail: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const CourseModel = mongoose.model('Course', Course);

module.exports = CourseModel;
