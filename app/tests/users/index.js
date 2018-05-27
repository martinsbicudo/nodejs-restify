const save = require('./save')
  , update = require('./update')
  , del = require('./del')
  , all = require('./all')

module.exports = setup => {
  const { test, models } = setup('users')
    , data = {
      email: 'test@test.com.br',
      password: 'test'
    }

  // TESTS
  save(test, models, data)
  update(test, models, data)
  del(test, models, data)
  all(test, models, data)
}
