const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const user = await User.findOne({ emailId: userEmail });
    if (!user) {
      res.status(404).send("user not found");
    }
    res.send(user);
  } catch (error) {
    res.status(400).send("something went wrong");
  }
});

app.get("/feed", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const user = await User.find({});
    if (user.length === 0) {
      res.status(404).send("user not found");
    }
    res.send(user);
  } catch (error) {
    res.status(400).send("something went wrong");
  }
});

app.post("/signup", async (req, res) => {
  const user = new User(req.body);

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
    app.listen(7777, () => {
      console.log("success");
    });
  })
  .catch((err) => {
    console.log("database not connected");
  });
