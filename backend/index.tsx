var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
require("dotenv").config();

var app = express();
var port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello from server");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(function () {
    console.log("Connected to database");
  })
  .catch(function (err) {
    console.log("Error: " + err);
  });

app.listen(port, function () {
  console.log("Server is running on port: " + port);
});
