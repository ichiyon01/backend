const mysql = require('mysql2');

const dbPool = mysql.createPool({
  host: 'localhost',
  user: 'u1563890_admin',
  password: 'gD1[tNkwsV2N',
  database: 'u1563890_upload_db'
})

// const dbPool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'upload_db'
// })

module.exports = dbPool.promise();