// GETTING CATEGORIES LIST
module.exports = async (req, res, next) => {
  const { del } = req.models.categories
    , { id } = req.body

  req.tryDAO(
    () => del(id)
  )

  next()
}
