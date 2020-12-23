const express = require("express");

const app = express();

const cors = require("cors");

const port = 3001;

const userRoute = require("./routes/User");

app.use(cors());
app.use(express.json());

app.use("/user", userRoute());

app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});

// Note: When making first get call to mysql 8 datbase, you might get the following error
// Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
// Solution: MySQL 8 has new more secure protection named caching_sha2_password. The problem is mysqljs in Node (the package you install with npm i mysql and use it in your Node code) doesn't support this new default authentication method of MySQL 8, yet. To resolve this go into mySQL Workbench and run the following ALTER USER 'username'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; ... where you insert corresponding username and password. After this run the command .... flush privileges; The only issue with this solution is that you are reverting mySQL DB to use the older less secure mysql_native_password. Should check in future once mysql node supports caching_sha2_password.
