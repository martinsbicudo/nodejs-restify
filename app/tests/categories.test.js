const test = require('ava')
  , connection = require('../services')
  , models = require('../models')
  , { categories } = models(connection())
  , { save } = categories

test('Creating Category', async t => {
  const result = await save({
    name: 'test'
  })

  t.is(result.name, 'test')
})
