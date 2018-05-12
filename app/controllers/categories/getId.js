const categories = require('../../models/categories/')
  , { getId } = categories()

// GETTING CATEGORIES LIST
module.exports = (req, res, next) => {
  const { id } = req.params

  getId(id)
    .then(data => res.send(data))
    .catch(e => res.send(e))

  next()
}
