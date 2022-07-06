const courseModel = require('../models/Course');

class SiteController {
  // [GET] / - home
  index(req, res) {
    res.render('home');
  }
}

module.exports = new SiteController();
