const connection = require('../../services')
  , get = require('./get')
  , getId = require('./getId')
  , post = require('./post')
  , put = require('./put')
  , del = require('./del')

module.exports = () => {
  const Connection = connection()

  return {
    get: () => get(Connection),
    getId: id => getId(Connection, id),
    post: data => post(Connection, data),
    put: (data, id) => put(Connection, data, id),
    del: id => del(Connection, id)
  }
}
