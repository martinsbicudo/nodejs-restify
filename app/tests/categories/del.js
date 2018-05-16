module.exports = (test, models, data) => {
  const { del } = models.categories

  test('Deleting Category', async t => {
    const result = await del(1)

    t.is(result.affectedRows, 1)
  })
}
