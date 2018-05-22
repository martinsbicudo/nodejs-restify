const test = require('ava')
  , connection = require('../services')
  , Connection = connection()
  , models = require('../models')(Connection)

module.exports = (table) => {
  // TRUNCATE TABLE before and after
  const truncate = () =>
    Connection
      .then(DB => DB.query(`TRUNCATE TABLE ${table}`))
      .catch(error => console.error({ error }))

  test.beforeEach(t => truncate())
  test.after.always(t => truncate())
  // / --------------------

  return {
    test,
    models
  }
}
