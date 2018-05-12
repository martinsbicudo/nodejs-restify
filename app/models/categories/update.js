module.exports = (Connection, data, id) =>
  new Promise((resolve, reject) =>
    Connection
      .then(DB =>
        DB.query('UPDATE categories SET ? WHERE id = ?', [data, id], e =>
          e ? reject(e) : resolve(data)
        )
      )
      .catch(e => reject(e))
  )
