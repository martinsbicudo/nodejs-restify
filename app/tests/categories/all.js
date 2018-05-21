module.exports = (test, models, data) => {
  const { all, save } = models.categories

  test('Getting Category', async t => {
    await save(data)

    const list = await all()

    t.is(list[0].name, data.name)
    t.is(list.length, 1)
  })
}
