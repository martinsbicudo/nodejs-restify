const categories = require('../../models/categories/')
  , { get } = categories()

// GETTING CATEGORIES LIST
module.exports = async (req, res, next) => {
  try {
    res.send(
      await get()
    )
    next()
  } catch (e) {
    req.error(e)
  }
}
