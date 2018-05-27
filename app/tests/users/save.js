module.exports = (test, models, data) => {
  const { save } = models.users

  test('Creating User', async t => {
    const result = await save(data)

    t.is(result.data.email, data.email)
    t.is(result.affectedRows, 1)
  })
}
