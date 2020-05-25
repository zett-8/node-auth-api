const createError = require('http-errors')
const cookieParser = require('cookie-parser')
const loggar = require('morgan')
const cors = require('cors')
const express = require('express')
const graphqlHTTP = require('express-graphql')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const passport = require('./controllers/auth').passport

const app = express()

app.use(cors({ credentials: true }))
app.use(loggar('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(passport.initialize())

app.use('/$', (req, res) => res.send('hello world'))
app.use('/users', usersRouter)
app.use('/api', passport.authenticate('jwt', { session: false }), indexRouter)

app.use(
  '/graphql',
  process.env.NODE_ENV === 'production'
    ? passport.authenticate('jwt', { session: false })
    : (req, res, next) => next(),
  graphqlHTTP({
    schema: {},
    graphiql: true,
  })
)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.send()
})

module.exports = app
