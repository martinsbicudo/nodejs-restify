module.exports = (Connection, data) =>
  new Promise((resolve, reject) =>
    Connection
      .then(DB =>
        DB.query('INSERT INTO categories SET ?', data, e =>
          e ? reject(e) : resolve(data)
        )
      )
      .catch(e => reject(e))
  )
