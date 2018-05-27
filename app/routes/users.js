const { all, save, update, del } = require('../controllers/users')

module.exports = server => {
  server.get('/users', all)
  server.get('/users/:id', all)
  server.post('/users', save)
  server.put('/users', update)
  server.del('/users', del)
}
