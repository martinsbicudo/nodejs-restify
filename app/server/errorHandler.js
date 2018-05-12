module.exports = (req, res, next) => {
  req.try = async Try => {
    try {
      res.send(
        await Try()
      )
    } catch (e) {
      res.send(e)
    }
  }

  next()
}
