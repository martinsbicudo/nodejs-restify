const categories = require('./categories')

module.exports = Connection => ({
  categories: categories(Connection)
})
