const categories = require('./categories')
  , queries = require('../config/queries')
  , errorHandler = require('../server/errorHandler')

module.exports = Connection => ({
  categories: categories(Connection, errorHandler, queries)
})
