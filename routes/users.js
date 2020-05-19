const router = require('express').Router()
const userController = require('../controllers').user

router.get('/', (req, res) => {
  res.send('user')
})
router.post('/signup', userController.signup)
router.post('/login', userController.login)

module.exports = router
