const express = require("express");

const app = express();
const { adminAuth, userAuth } = require("./middleware/auth");

app.use("/admin/seedata", (req, res) => {
  res.send("see data");
});

app.use("/user/seedata", (req, res) => {
  res.send("see data");
});

app.use("/admin", adminAuth);

app.use("/user", userAuth);

app.use("/admin/getdata", (req, res) => {
  res.send("get data");
});

app.use("/user/getdata", (req, res) => {
  res.send("get data");
});

app.use("/admin/deletedata", (req, res) => {
  res.send("delete data");
});

app.use("/user/deletedata", (req, res) => {
  res.send("delete data");
});

app.listen(3000, () => {
  console.log("success");
});
