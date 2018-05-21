module.exports = (Connection, errorHandler, queries, id) =>
  new Promise((resolve, reject) =>
    Connection
      .then(DB => {
        const { all } = queries.categories

        DB.query(all(id), [id], (e, data) =>
          e ? reject(e) : resolve(data)
        )
      })
      .catch(e => errorHandler(e))
  )
