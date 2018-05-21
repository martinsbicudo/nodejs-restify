module.exports = (Connection, errorHandler, queries, id, data) =>
  new Promise((resolve, reject) =>
    Connection
      .then(DB => {
        const { update } = queries.categories

        DB.query(update(), [data, id], (e, results) =>
          e ? reject(e) : resolve({
            data,
            affectedRows: results.affectedRows
          })
        )
      })
      .catch(e => errorHandler(e))
  )
