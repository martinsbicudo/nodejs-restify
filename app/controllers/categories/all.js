const categories = require('../../models/categories/')
  , { all } = categories()

// GETTING CATEGORIES LIST
module.exports = async (req, res, next) => {
  req.try(
    () => all()
  )

  next()
}
