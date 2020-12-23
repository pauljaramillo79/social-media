const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "MateoPatricio@2015",
  database: "socialMedia",
});

module.exports = db;
