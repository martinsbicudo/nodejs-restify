const connection = require('../services')
  , models = require('../models')

module.exports = (req, res, next) => {
  const Connection = {
    init: connection(),
    queries: req.queries
  }

  req.models = models(Connection)

  next()
}
