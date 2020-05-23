const { v4: uuidv4 } = require('uuid')
const generateJwtFromUserEmail = require('./auth').generateJwtFromUserEmail
const User = require('../models').User

module.exports = {
  signup(req, res) {
    User
      .findOne({ where: { email: req.body.email}})
      .then(user => {
        if (user) return res.status(400).send({
          message: 'already exists'
        })

        return User
          .create({
            id: uuidv4(),
            email: req.body.email,
            password: req.body.password
          })
          .then(u => {
            const user = JSON.parse(JSON.stringify(u))
            delete user.password
            return res.status(200).send(user)
          })
          .catch((err) => {
            console.log(err)
            return res.status(400).send({
              message: 'error'
            })
          })
      })
  },

  login(req, res) {
    return User
      .findOne({
        where: { email: req.body.email}
      })
      .then(async (user) => {
        if (await user.validPassword(req.body.password)) {
          const payload_seed = { email: user.email }
          const jwt = generateJwtFromUserEmail(payload_seed)
          const [header, payload, signature] = jwt.split('.')
          const token = header+'.'+payload
          return res.status(200).cookie('jwt-signature', signature, {
            httpOnly: true,
            secure: true,
            sameSite: 'None'
          }).send({ token })
        } else {
          return res.status(400).send({
            message: 'wrong password'
          })
        }
      })
      .catch(() => res.status(404).send({
        message: 'not found'
      }))
  },

  logout(req, res) {
    return res.status(200).clearCookie('jwt-signature').send()
  }
}
