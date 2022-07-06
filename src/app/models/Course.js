const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    thumbnail: { type: String },
    slug: { type: String, slug: 'title', unique: true },
    videoId: { type: String },
  },
  { timestamps: true },
);

const CourseModel = mongoose.model('Course', courseSchema);

module.exports = CourseModel;
