const categories = require('../../models/categories/')
  , { put } = categories()

// GETTING CATEGORIES LIST
module.exports = (req, res, next) => {
  const { data, id } = req.params

  console.log(req.params)

  put(data, id)
    .then(data => res.send(data))
    .catch(e => res.send(e))

  next()
}
