module.exports = Connection =>
  new Promise((resolve, reject) =>
    Connection
      .then(DB =>
        DB.query('SELECT * FROM categories', (e, results) =>
          e ? reject(e) : resolve(results)
        )
      )
      .catch(e => reject(e))
  )
