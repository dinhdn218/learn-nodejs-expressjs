const CourseModel = require('../models/Course');

class CourseController {
  // [GET] /courses
  index(req, res, next) {
    CourseModel.find({})
      .lean()
      .then((courses) => res.render('courses', { courses }))
      .catch(next);
  }

  // [GET] /courses/:slug
  detail(req, res, next) {
    CourseModel.findOne({ slug: req.params.slug })
      .lean()
      .then((course) => res.render('courses/detail', { course }))
      .catch(next);
  }

  // [GET] /courses/create
  create(req, res, next) {
    res.render('courses/create');
  }

  // [POST] /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.thumbnail = `https://i3.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`;
    const course = new CourseModel(formData);
    course
      .save()
      .then(() => res.redirect('/courses'))
      .catch(() => {});
  }
}

module.exports = new CourseController();
