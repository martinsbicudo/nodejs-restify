module.exports = (Connection, id) =>
  new Promise((resolve, reject) => {
    const { all } = Connection.queries.categories

    Connection.init
      .then(DB =>
        DB.query(all(id), [id], (e, data) =>
          e ? reject(e) : resolve(data)
        )
      )
      .catch(e => reject(e))
  })
