const { get, getId, post, put, del } = require('../controllers/categories')

module.exports = server => {
  server.get('/categorias', get)
  server.get('/categorias/:id', getId)
  server.post('/categorias', post)
  server.put('/categorias', put)
  server.del('/categorias', del)
}
