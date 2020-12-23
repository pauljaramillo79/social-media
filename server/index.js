const express = require("express");

const app = express();

const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "MateoPatricio@2015",
  database: "socialMedia",
});

const port = 3001;

app.get("/register", (req, res) => {
  db.query(
    "INSERT INTO users (username, password) VALUES ('paul', 'password')",
    (err, results) => {
      // console.log(err);
      res.send(results);
    }
  );
});

app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});

// Note:
// Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
// MySQL 8 has new more secure protection named caching_sha2_password. The problem is mysqljs in Node (the package you install with npm i mysql and use it in your Node code) doesn't support this new default authentication method of MySQL 8, yet. To resolve this go into mySQL Workbench and run the following ALTER USER 'username'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; ... where you insert corresponding username and password. After this run the command .... flush privileges;
