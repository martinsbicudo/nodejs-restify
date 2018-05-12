const categories = require('../../models/categories/')
  , { save } = categories()

// GETTING CATEGORIES LIST
module.exports = async (req, res, next) => {
  const data = req.params

  req.try(
    () => save(data)
  )

  next()
}
