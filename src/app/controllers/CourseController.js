const CourseModel = require('../models/Course');

class CourseController {
  // [GET] /course
  index(req, res, next) {
    CourseModel.find({})
      .lean()
      .then((courses) => res.render('courses', { courses }))
      .catch(next);
  }

  // [GET] /course/:slug
  detail(req, res, next) {
    CourseModel.findOne({ slug: req.params.slug })
      .lean()
      .then((course) => res.render('courses/detail', { course }))
      .catch(next);
  }
}

module.exports = new CourseController();
