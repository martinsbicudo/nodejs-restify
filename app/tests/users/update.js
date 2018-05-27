module.exports = (test, models, data) => {
  const { update } = models.users

  test('Updating User', async t => {
    const Data = {
        password: 'test-update'
      }
      , result = await update(1, Data.password)

    t.true(result.id > 0)
    t.is(result.affectedRows, 1)
  })
}
