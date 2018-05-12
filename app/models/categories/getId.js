module.exports = (Connection, id) =>
  new Promise((resolve, reject) =>
    Connection
      .then(DB =>
        DB.query('SELECT * FROM categories WHERE id = ?', [id], (e, data) =>
          e ? reject(e) : resolve(data)
        )
      )
      .catch(e => reject(e))
  )
