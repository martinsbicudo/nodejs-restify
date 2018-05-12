const { all, save, update, del } = require('../controllers/categories')

module.exports = server => {
  server.get('/categorias', all)
  server.get('/categorias/:id', all)
  server.post('/categorias', save)
  server.put('/categorias', update)
  server.del('/categorias', del)
}
