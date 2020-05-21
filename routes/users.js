const router = require('express').Router()
const userController = require('../controllers').user

router.get('/', (req, res) => {
  res.send('user')
})
router.post('/signup', userController.signup)
router.post('/login', userController.login)
router.get('/logout', userController.logout)

module.exports = router
