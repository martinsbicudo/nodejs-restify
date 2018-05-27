module.exports = (Connection, errorHandler, queries, data) =>
  new Promise((resolve, reject) =>
    Connection
      .then(DB => {
        const { save } = queries.users

        DB.query(save(), [data], (e, results) =>
          e ? reject(e) : resolve({
            data,
            affectedRows: results.affectedRows
          })
        )
      })
      .catch(e => errorHandler(e))
  )
