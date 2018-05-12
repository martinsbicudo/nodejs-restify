const categories = require('../../models/categories/')
  , { del } = categories()

// GETTING CATEGORIES LIST
module.exports = async (req, res, next) => {
  const { id } = req.params

  req.try(
    () => del(id)
  )

  next()
}
