module.exports = (Connection, errorHandler, queries, data) =>
  new Promise((resolve, reject) =>
    Connection
      .then(DB => {
        const { save } = queries.categories

        DB.query(save(), [data], e =>
          e ? reject(e) : resolve(data)
        )
      })
      .catch(e => errorHandler(e))
  )
