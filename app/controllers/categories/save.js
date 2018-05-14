// GETTING CATEGORIES LIST
module.exports = async (req, res, next) => {
  const { save } = req.models.categories
    , data = req.body

  req.tryDAO(
    () => save(data)
  )

  next()
}
