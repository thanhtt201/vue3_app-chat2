const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/chat")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("err", err);
    process.exit(1);
  });