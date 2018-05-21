// GETTING CATEGORIES LIST
module.exports = (req, res, next) => {
  const { update } = req.models.categories
    , { id, data } = req.body

  req.tryDAO(
    () => update(id, data)
  )

  next()
}
