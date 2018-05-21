const save = require('./save')
  , update = require('./update')
  , del = require('./del')
  , all = require('./all')

module.exports = setup => {
  const { test, models } = setup('categories')
    , data = {
      name: 'test'
    }

  // TESTS
  save(test, models, data)
  update(test, models, data)
  del(test, models, data)
  all(test, models, data)
}
