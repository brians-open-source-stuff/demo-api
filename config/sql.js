const { createPool } = require("mysql2/promise");

module.exports = (function() {
  const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT || 3306,
    namedPlaceholders: true,
    connectionLimit: 10
  });

  try {
    const connection = pool.getConnection();
    connection.release();
  } catch (error) {
    if (error.code === "PROTOCOL_CONNECTION_LOST")
      throw "Database connection was closed.";
    if (error.code === "ER_CON_COUNT_ERROR")
      throw "Database has too many connections.";
    if (error.code === "ECONNREFUSED") throw "Database connection was refused.";
  }

  return pool;
})();
