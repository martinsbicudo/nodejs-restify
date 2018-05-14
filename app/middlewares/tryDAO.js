module.exports = (req, res, next) => {
  req.tryDAO = async (Try, action) => {
    try {
      res.send(
        await Try()
      )
    } catch (error) {
      res.send({ error })
    }
  }

  next()
}
