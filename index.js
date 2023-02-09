const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const accounts = require("./routes/accounts");
const cards = require("./routes/cards");
const customers = require("./routes/customers");

// middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/accounts", accounts);
app.use("/api/cards", cards);
app.use("/api/customers", customers);

mongoose
  .connect("mongodb://localhost:27017/users", { useNewUrlParser: true })
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(3000, () => {
  console.log(`App is running on port 3000`);
});
