// ENV CONFIG
require('dotenv').config()

// CONECTION
const mysql = require('mysql')
  , config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.NODE_ENV === 'test' ? process.env.DB_BASE_TEST : process.env.DB_BASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
  },
  pool = mysql.createPool(config)

// EXPORT
module.exports = () => new Promise((resolve, reject) => {
  pool.getConnection((e, connection) =>
    e ? reject(e) : resolve(connection)
  )
})
