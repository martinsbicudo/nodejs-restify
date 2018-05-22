// DELETING USER
module.exports = async (req, res, next) => {
  const { del } = req.models.users
    , { id } = req.body

  req.tryDAO(
    () => del(id)
  )

  next()
}
