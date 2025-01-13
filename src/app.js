const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Adarsh",
    lastname: "Kumar",
    emailId: "a@gmail.com",
    password: "a123",
    gender: "male",
  });

  try {
    await user.save();
    res.send("user added successfully");
  } catch (error) {
    res.status(400).send("error in saving data");
  }
});

connectDB()
  .then(() => {
    console.log("Database coneect successfully");
    app.listen(3000, () => {
      console.log("success");
    });
  })
  .catch((err) => {
    console.log("database not connected");
  });
