const { get, post } = require('../controllers/categories')

module.exports = server => {
  server.get('/categorias', get)
  server.post('/categorias', post)
}
