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

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.write("<h1>WELCOME</h1>");
  res.write(
    "To add a customer, proceed to /api/customers and make a post request passing the name of the customer"
  );
  res.write(
    "To add an account, proceed to /api/accounts and make a post request passing the customerId and optionally, the balance"
  );
  res.write(
    "To add a card, proceed to /api/cards and make a post request passing the accountId and the (card) number"
  );
});

app.listen(PORT || 3000, () => {
  console.log(`App is running on port ${PORT}`);
});
