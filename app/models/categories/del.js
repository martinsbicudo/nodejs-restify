module.exports = (Connection, id) =>
  new Promise((resolve, reject) =>
    Connection
      .then(DB =>
        DB.query(`DELETE FROM categories WHERE id = ?`, [id], e =>
          e ? reject(e) : resolve()
        )
      )
      .catch(e => reject(e))
  )
