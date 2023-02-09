const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const accounts = require("./routes/accounts");
const cards = require("./routes/cards");
const customers = require("./routes/customers");
const topup = require("./routes/topup");
const withdraw = require("./routes/withdraw");

// middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/accounts", accounts);
app.use("/api/cards", cards);
app.use("/api/customers", customers);
app.use("/api/topup", topup);
app.use("/api/withdraw", withdraw);

mongoose
  .connect(
    "mongodb+srv://kasiliwachiye:uU83hxw7jzkPtmMm@cluster0.koiptqu.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(3000, () => {
  console.log(`App is running on port 3000`);
});
