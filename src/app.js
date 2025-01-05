const express = require("express");

const app = express();

app.use(
  "/",
  (req, res, next) => {
    console.log("hi2");
    next();
  },
  (req, res, next) => {
    console.log("hi2");
    next();
  },
  (req, res, next) => {
    console.log("hi3");

    res.send("ADARSH ");
  }
);

app.listen(3000, () => {
  console.log("success");
});
