module.exports = (test, models, data) => {
  const { update } = models.categories

  test('Updating Category', async t => {
    const Data = {
        name: 'test-update'
      }
      , result = await update(1, Data)

    t.is(result.data.name, Data.name)
    t.is(result.affectedRows, 1)
  })
}
