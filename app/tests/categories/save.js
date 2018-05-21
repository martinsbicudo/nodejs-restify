module.exports = (test, models, data) => {
  const { save } = models.categories

  test('Creating Category', async t => {
    const result = await save(data)

    t.is(result.data.name, data.name)
    t.is(result.affectedRows, 1)
  })
}
