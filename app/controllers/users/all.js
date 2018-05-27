// GETTING USERS LIST
module.exports = async (req, res, next) => {
  const { all } = req.models.users
    , { id = null } = req.params

  req.tryDAO(
    () => all(id)
  )

  next()
}
