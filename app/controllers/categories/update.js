// GETTING CATEGORIES LIST
module.exports = (req, res, next) => {
  const { update } = req.models.categories
    , { data, id } = req.body

  req.tryDAO(
    () => update(data, id)
  )

  next()
}
