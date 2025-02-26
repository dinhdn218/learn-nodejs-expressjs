const Course = require('../models/Course')
const slugify = require('slugify')

const newsController = {
  // GET /courses
  list(req, res) {
    Course.find({})
      .then((courses) => {
        return res.render('courses', {
          currentRoute: '/courses',
          courses: courses.map((course) => course.toObject()),
        })
      })
      .catch(() => res.send('ERROR'))
  },

  // GET Detail /courses/:slug
  detail(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        console.log(course)
        return res.render('courses/detail', {
          currentRoute: '/courses',
          course: course.toObject(),
        })
      })
      .catch(next)
  },

  // GET Create /courses/create
  create(req, res) {
    res.render('courses/create')
  },

  // POST Create /courses/store
  store(req, res) {
    const formData = req.body
    const course = new Course(formData)
    course
      .save()
      .then(() => res.redirect('/courses'))
      .catch(() => res.send('ERROR'))
  },
}

module.exports = newsController
