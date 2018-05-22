// UPDATING USER
module.exports = (req, res, next) => {
  const { update } = req.models.users
    , { id, data } = req.body

  req.tryDAO(
    () => update(id, data)
  )

  next()
}
