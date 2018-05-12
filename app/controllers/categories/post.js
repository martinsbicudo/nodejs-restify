const categories = require('../../models/categories/')
  , { post } = categories()

// GETTING CATEGORIES LIST
module.exports = (req, res, next) => {
  const data = req.params

  console.log(data)

  post(data)
    .then(data => res.send(data))
    .catch(e => res.send(e))

  next()
}
