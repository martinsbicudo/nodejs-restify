const categories = require('./categories')

module.exports = server => {
  // ROOT
  server.get('/', (req, res, next) => {
    res.send('Hello World :)')
    next()
  })

  // CATEGORIES
  categories(server)
}
