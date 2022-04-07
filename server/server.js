require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dbconnection = require("./config/dbconnection");
let routes = require("./routes/route");
const app = express();
dbconnection();
app.use(cors());
app.use(bodyParser.json());
app.use(routes);
app.listen(process.env.PORT, () => {
  console.log(`LISTENING TO THE PORT ${process.env.PORT}`);
});
