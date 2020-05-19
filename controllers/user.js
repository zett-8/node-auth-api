const jwt = require('jsonwebtoken')
const JwtOptions = require('./auth').JwtOptions
const User = require('../models').User

module.exports = {
  signup(req, res) {
    return User
      .create({
        email: req.body.email,
        password: req.body.password
      })
      .then(u => {
        const user = JSON.parse(JSON.stringify(u))
        delete user.password
        return res.status(200).send(user)
      })
      .catch(() => res.status(400).send({
        message: 'error'
      }))
  },

  login(req, res) {
    return User
      .findOne({
        where: { email: req.body.email}
      })
      .then(async (user) => {
        if (await user.validPassword(req.body.password)) {
          const payload = { email: user.email }
          const token = jwt.sign(payload, JwtOptions.secretOrKey)
          return res.status(200).send(token)
        } else {
          return res.status(400).send({
            message: 'wrong password'
          })
        }
      })
      .catch(() => res.status(404).send({
        message: 'not found'
      }))
  }
}
