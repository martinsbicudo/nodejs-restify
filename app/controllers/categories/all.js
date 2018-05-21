// GETTING CATEGORIES LIST
module.exports = async (req, res, next) => {
  const { all } = req.models.categories
    , { id = null } = req.params

  req.tryDAO(
    () => all(id)
  )

  next()
}
