// import express
const express = require("express");

// create a app
const app = express();

// get route for "/"
app.get("/", function (req, res) {
  res.json({
    message: "Welcome",
  });
});

// post route for "/"
app.post("/", function (req, res) {});

// start listning
app.listen(5000, function () {
  console.log("Server is running");
});
