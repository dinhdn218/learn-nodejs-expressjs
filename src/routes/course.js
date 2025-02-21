const express = require('express')
const router = express.Router()

const courseController = require('../app/controllers/CourseController')

router.use('/:slug', courseController.detail)
router.use('/', courseController.list)

module.exports = router
