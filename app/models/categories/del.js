module.exports = (Connection, errorHandler, queries, id) =>
  new Promise((resolve, reject) =>
    Connection
      .then(DB => {
        const { del } = queries.categories

        DB.query(del(), [id], (e, results) =>
          e ? reject(e) : resolve({
            affectedRows: results.affectedRows
          })
        )
      })
      .catch(e => errorHandler(e))
  )
