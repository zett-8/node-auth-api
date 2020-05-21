const router = require('express').Router()
const genreController = require('../controllers').genre
const articleController = require('../controllers').article
const tagController = require('../controllers').tag

router.get('/genre', genreController.list)
router.get('/genre-with-children', genreController.withChildren)
router.get('/genre/:id', genreController.getById)
router.post('/genre', genreController.add)
router.delete('/genre/:id', genreController.delete)

router.get('/article', articleController.list)
router.get('/article-with-children', articleController.withChildren)
router.post('/article', articleController.add)

router.get('/tag', tagController.list)
router.post('/tag', tagController.add)

module.exports = router
