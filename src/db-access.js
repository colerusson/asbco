module.exports.dbQuery = async function (query) {
  require("dotenv").config();
  const mysql = require("mysql2");

  const connection = mysql.createConnection({
    host: "aws.connect.psdb.cloud",
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "anti-scroll",
    ssl: {
      rejectUnauthorized: true,
    },
  });

  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to PlanetScale:", err.stack);
      return;
    }
    console.log("Connected to PlanetScale!");
  });

  const res = await connection.promise().query(query);

  connection.end();

  return res[0];
};
