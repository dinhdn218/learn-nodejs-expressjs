const Course = require('../models/Course')

const newsController = {
  // GET /courses
  list(req, res) {
    Course.find({})
      .then((courses) => {
        return res.json(courses)
      })
      .catch(() => res.send('ERROR'))
  },

  // GET Detail /courses/:slug
  detail(req, res) {
    return res.send(`course detail - ${req.params.slug}`)
  },
}

module.exports = newsController
