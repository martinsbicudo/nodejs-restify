const categories = require('../../models/categories/')
  , { del } = categories()

// GETTING CATEGORIES LIST
module.exports = (req, res, next) => {
  const { id } = req.params

  del(id)
    .then(data => res.send(data))
    .catch(e => res.send(e))

  next()
}
