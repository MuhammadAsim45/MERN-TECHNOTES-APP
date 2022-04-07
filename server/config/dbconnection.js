const mongoose = require("mongoose");
const dbconnection = () => {
  mongoose
    .connect(process.env.DATABASE_URI)
    .then(() => {
      console.log("connected to the database successfully");
    })
    .catch((e) => {
      console.log("DATABASE CONNECTION FAILED", e.message);
    });
};
module.exports = dbconnection;
