const CourseModel = require('../models/Course');

class CoursesController {
  // [GET] /course
  index(req, res, next) {
    CourseModel.find({})
      .lean()
      .then((courses) => res.render('courses', { courses }))
      .catch(next);
  }

  // [GET] /course/:slug
  showDetail(req, res) {
    res.send('Course DETAIL');
  }
}

module.exports = new CoursesController();
