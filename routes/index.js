const router = require('express').Router()
const genreController = require('../controllers').genre
const articleController = require('../controllers').article
const tagController = require('../controllers').tag

router.get('/', (req, res) => {
  res.send('hello')
})

router.get('/api/genre', genreController.list)
router.get('/api/genre-with-children', genreController.withChildren)
router.get('/api/genre/:id', genreController.getById)
router.post('/api/genre', genreController.add)
router.delete('/api/genre/:id', genreController.delete)

router.get('/api/article', articleController.list)
router.get('/api/article-with-children', articleController.withChildren)
router.post('/api/article', articleController.add)

router.get('/api/tag', tagController.list)
router.post('/api/tag', tagController.add)

module.exports = router
