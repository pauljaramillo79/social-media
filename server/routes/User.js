const express = require("express");
const router = express.Router();

const db = require("../config/db");

module.exports = () => {
  router.get("/register", (req, res) => {
    db.query(
      "INSERT INTO users (username, password) VALUES ('paul', 'password')",
      (err, results) => {
        // console.log(err);
        res.send(results);
      }
    );
  });
  return router;
};
