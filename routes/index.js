const router = require('express').Router()
const genreController = require('../controllers').genre
const articleController = require('../controllers').article

router.get('/', (req, res) => {
  res.send('hello')
})

router.get('/api/genre', genreController.list)
router.post('/api/genre', genreController.add)
router.delete('/api/genre/:id', genreController.delete)

router.post('/api/article', articleController.add)

module.exports = router
