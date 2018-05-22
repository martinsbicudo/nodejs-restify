const categories = require('./categories')
  , users = require('./users')

module.exports = server => {
  // ROOT
  server.get('/', (req, res, next) => {
    res.send('Hello World :)')
    next()
  })

  // STARTING ROUTES
  categories(server)
  users(server)
}
