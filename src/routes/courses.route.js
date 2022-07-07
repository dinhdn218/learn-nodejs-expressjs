const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create);

router.post('/store', courseController.store);

router.get('/edit/:id', courseController.edit);

router.put('/edit/:id', courseController.update);

router.delete('/delete/:id', courseController.delete);

router.get('/:slug', courseController.detail);

router.get('/', courseController.index);

module.exports = router;
