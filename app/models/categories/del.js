module.exports = (Connection, errorHandler, queries, id) =>
  new Promise((resolve, reject) =>
    Connection
      .then(DB => {
        const { del } = queries.categories

        DB.query(del(), [id], e =>
          e ? reject(e) : resolve()
        )
      })
      .catch(e => errorHandler(e))
  )
