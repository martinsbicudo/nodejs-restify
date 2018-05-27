module.exports = (test, models, data) => {
  const { del } = models.users

  test('Deleting User', async t => {
    const result = await del(1)

    t.is(result.affectedRows, 1)
  })
}
