const siteRouter = require('./site.route');
const coursesRouter = require('./courses.route');

function route(app) {
  app.use('/courses', coursesRouter);

  app.use('/', siteRouter);
}

module.exports = route;
