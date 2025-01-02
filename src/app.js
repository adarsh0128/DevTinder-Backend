const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Hi ADARSH");
});

app.use("/home", (req, res) => {
  res.send("Hi welcome to home");
});

app.listen(3000, () => {
  console.log("success");
});
