const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://adarshkumar:********@namastenodejs.tpzbq.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
