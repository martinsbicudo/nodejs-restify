const categories = require('../../models/categories/')
  , { post } = categories()

// GETTING PRODUCTS LIST
module.exports = (req, res) =>
  new Promise((resolve, reject) =>
    post()
      .then(resolve)
      .catch(reject)
  )
