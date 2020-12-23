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
  return router;
};
