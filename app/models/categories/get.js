module.exports = Connection =>
  new Promise((resolve, reject) =>
    Connection
      .then(DB =>
        DB.query('SELECT * FROM categories', (e, data) =>
          e ? reject(e) : resolve(data)
        )
      )
      .catch(e => reject(e))
  )
