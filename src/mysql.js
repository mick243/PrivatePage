const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "1q2w3e4r!",
  database: "sys",
  dateStrings: true,
});

module.exports = connection;
