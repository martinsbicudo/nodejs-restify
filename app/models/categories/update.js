module.exports = (Connection, errorHandler, queries, data, id) =>
  new Promise((resolve, reject) =>
    Connection
      .then(DB => {
        const { update } = queries.categories

        DB.query(update(), [data, id], e =>
          e ? reject(e) : resolve(data)
        )
      })
      .catch(e => errorHandler(e))
  )
