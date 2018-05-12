const connection = require('../../services')
  , get = require('./get')
  , post = require('./post')

module.exports = () => {
  const Connection = connection()

  return {
    get: () => get(Connection),
    add: category => post(Connection, category)
  }
}
