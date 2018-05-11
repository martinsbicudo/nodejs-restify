module.exports = server => {
  server.get('/categoria', (req, res, next) => {
    res.send(['1', 'lalala'])
    next()
  })

  server.post('/categoria', (req, res, next) => {
    const { name } = req.params

    res.send(name)
    next()
  })
}
