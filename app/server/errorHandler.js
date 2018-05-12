module.exports = (req, res, next) => {
  req.error = e => {
    res.send(e)
  }
  next()
}
