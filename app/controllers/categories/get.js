const categories = require('../../models/categories/')
  , { get } = categories()

// GETTING CATEGORIES LIST
module.exports = (req, res, next) =>
  get()
    .then(categories => res.send(categories))
    .catch(e => res.send(e))
