module.exports = (test, models, data) => {
  const { all, save } = models.users

  test('Getting User', async t => {
    await save(data)

    const list = await all()

    t.is(list[0].email, data.email)
    t.is(list.length, 1)
  })
}
