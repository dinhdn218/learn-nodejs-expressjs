const courseRouter = require('./course')
const siteRouter = require('./site')

const route = (app) => {
  app.use('/courses', courseRouter)
  app.use('/', siteRouter)
}

module.exports = route
