module.exports = server => {
  server.get('/', (req, res, next) => {
    res.send('Hello World :)')
    next()
  })
}
