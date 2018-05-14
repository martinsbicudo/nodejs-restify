const queries = require('../config/queries')

module.exports = (req, res, next) => {
  req.queries = queries

  next()
}
