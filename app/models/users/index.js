const sha1 = require('sha1')
  , all = require('./all')
  , save = require('./save')
  , update = require('./update')
  , del = require('./del')

module.exports = (Connection, errorHandler, queries) => ({
  all: id => all(Connection, errorHandler, queries, id),
  save: data => {
    data.password = sha1(data.password)

    save(Connection, errorHandler, queries, data)
  },
  update: (id, password) => update(Connection, errorHandler, queries, id, sha1(password)),
  del: id => del(Connection, errorHandler, queries, id)
})
