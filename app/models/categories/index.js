const all = require('./all')
  , save = require('./save')
  , update = require('./update')
  , del = require('./del')

module.exports = (Connection, errorHandler, queries) => ({
  all: id => all(Connection, errorHandler, queries, id),
  save: data => save(Connection, errorHandler, queries, data),
  update: (data, id) => update(Connection, errorHandler, queries, data, id),
  del: id => del(Connection, errorHandler, queries, id)
})
