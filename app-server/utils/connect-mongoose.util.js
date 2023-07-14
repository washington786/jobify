const mongoose = require("mongoose");
require("dotenv").config();

function dbConnection() {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(function () {
      console.log("connected to the database");
    })
    .catch(function (err) {
      throw new Error(`Failed to connect to database: ${err}`);
    });
}
module.exports = dbConnection;
