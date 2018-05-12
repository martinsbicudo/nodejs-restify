module.exports = Connection =>
  new Promise((resolve, reject) =>
    Connection
      .then(DB =>
        DB.query('SELECT * FROM categoriess', (e, data) =>
          e ? reject('lala') : resolve(data)
        )
      )
      .catch(e => reject(e))
  )
