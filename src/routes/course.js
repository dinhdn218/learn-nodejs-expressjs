const express = require('express')
const router = express.Router()

const courseController = require('../app/controllers/CourseController')

router.get('/:id/edit', courseController.edit)
router.put('/:id/save', courseController.save)
router.delete('/:id', courseController.delete)
router.post('/store', courseController.store)
router.get('/create', courseController.create)
router.get('/:slug', courseController.detail)
router.get('/', courseController.list)

module.exports = router
