const courseModel = require('../models/Course');

class SiteController {
  // [GET] / - home
  index(req, res) {
    courseModel.find({}, function (err, courses) {
      if (err) return;
      res.json(courses);
    });
  }

  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
