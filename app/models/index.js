const categories = require('./categories')
  , users = require('./users')
  , queries = require('../config/queries')
  , errorHandler = require('../server/errorHandler')

module.exports = Connection => ({
  categories: categories(Connection, errorHandler, queries),
  users: users(Connection, errorHandler, queries)
})
