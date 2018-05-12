const connection = require('../../services')
  , all = require('./all')
  , save = require('./save')
  , update = require('./update')
  , del = require('./del')

module.exports = () => {
  const Connection = connection()

  return {
    all: () => all(Connection),
    save: data => save(Connection, data),
    update: (data, id) => update(Connection, data, id),
    del: id => del(Connection, id)
  }
}
