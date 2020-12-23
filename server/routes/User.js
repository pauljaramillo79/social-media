const express = require("express");
const router = express.Router();

const db = require("../config/db");

module.exports = () => {
  router.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query(
      "INSERT INTO users (username, password) VALUES (?,?);",
      [username, password],
      (err, results) => {
        // console.log(err);
        res.send(results);
      }
    );
  });
  router.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query(
      "SELECT * FROM users WHERE username = ?",
      [username, password],
      (err, results) => {
        if (err) {
          console.log(err);
        }
        if (results.length > 0) {
          if (password == results[0].password) {
            res.send("You are logged in!");
          } else {
            res.send("Wrong username/password combo");
          }
        } else {
          res.send("User doesn't exist");
        }
      }
    );
  });

  return router;
};
