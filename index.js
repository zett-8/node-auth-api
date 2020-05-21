const app = require('./app')
const http = require('http')

const PORT = process.env.PORT || 3333
app.set('port', PORT)

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`running on ${PORT}`)
  console.log(`NODE_ENV=${process.env.NODE_ENV}`)
})
