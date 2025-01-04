const express = require("express");

const app = express();

// this will only match get
app.get("/user/:id/:pass", (req, res) => {
  res.send("evrything is wright");
});

// this will only match get
app.get("/user", (req, res) => {
  res.send({ firstName: "Adarsh", lastName: "Kumar" });
});

// this will only match post
app.post("/user", (req, res) => {
  res.send("Data saved successfully");
});

// this will match all the http method api call to test the user
app.use("/home", (req, res) => {
  res.send("Hi welcome to home");
});

app.listen(3000, () => {
  console.log("success");
});
