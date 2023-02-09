const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// step 5: import mongoose
const mongoose = require("mongoose");

// step 5: connect to mongodb
mongoose
  .connect("mongodb://localhost:27017/users", { useNewUrlParser: true })
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

// middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(process.env.PORT || 3000, () => {
  console.log(`App is running on port 3000`);
});
