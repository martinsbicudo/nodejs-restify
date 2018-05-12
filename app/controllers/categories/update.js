const categories = require('../../models/categories/')
  , { update } = categories()

// GETTING CATEGORIES LIST
module.exports = (req, res, next) => {
  const { data, id } = req.params

  req.try(
    () => update(data, id)
  )

  next()
}
