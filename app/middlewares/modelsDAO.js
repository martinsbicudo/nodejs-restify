const connection = require('../services')
  , models = require('../models')

module.exports = (req, res, next) => {
  // CALL CONNECTION
  const Connection = connection()

  // SETTING MODELS FOR USE IN CONTROLLERS
  req.models = models(Connection)

  next()
}
