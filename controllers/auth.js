const jwt = require('jsonwebtoken')
const passport = require('passport')
const passportJWT = require('passport-jwt')

const User = require('../models').User

let ExtractJwt = passportJWT.ExtractJwt
let JwtStrategy = passportJWT.Strategy

let JwtOptions = {}
JwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
JwtOptions.secretOrKey = 'nt2yntakv2pktnh8'

let strategy = new JwtStrategy(JwtOptions, (jwt_payload, next) => {
  console.log('payload received', jwt_payload)

  User
    .findOne({
      where: { email: jwt_payload.email }
    })
    .then(user => {
      if (user) {
        next(null, user)
      } else {
        next(null, false)
      }
    })
    .catch(() => { next(null, false) })

})

passport.use(strategy)

module.exports = {
  passport,
  JwtOptions
}

