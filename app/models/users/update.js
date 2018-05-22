module.exports = (Connection, errorHandler, queries, id, password) =>
  new Promise((resolve, reject) =>
    Connection
      .then(DB => {
        const { update } = queries.users

        DB.query(update(), [password, id], (e, results) =>
          e ? reject(e) : resolve({
            id,
            affectedRows: results.affectedRows
          })
        )
      })
      .catch(e => errorHandler(e))
  )
