const { createPool } = require("mysql");

//'{createpool}' instead of 'mysql' is used as we dont need the entire module only the pool method

const pool = createPool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB,
  connectionlimit: 10,
});

module.exports = pool;
