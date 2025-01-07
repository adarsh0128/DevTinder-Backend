const express = require("express");

const app = express();

app.use("/admin/getdata", (req, res) => {
  // try {
  //   throw new Error("ilqggev");
  //   res.send("hi");
  // } catch (error) {
  //   res.status(500).send("error 1");
  // }
  throw new Error("ilqggev");
  res.send("hi");
});

app.use("/", (error, req, res, next) => {
  res.status(500).send("error 2");
});

app.listen(3000, () => {
  console.log("success");
});
