const all = require('./all')
  , save = require('./save')
  , update = require('./update')
  , del = require('./del')

module.exports = Connection => ({
  all: id => all(Connection, id),
  save: data => save(Connection, data),
  update: (data, id) => update(Connection, data, id),
  del: id => del(Connection, id)
})
