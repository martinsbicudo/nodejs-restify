// SAVING USER
module.exports = async (req, res, next) => {
  const { save } = req.models.users
    , data = req.body

  req.tryDAO(
    () => save(data)
  )

  next()
}
