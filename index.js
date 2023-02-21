const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// routes
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
  // ==========================================================================================================
  // this would usually go in a .env file. It's just here for your ease of testing - Kasili Wachiye
  // you can entirely remove the MongoDB Atlas configuration and just use "mongodb://localhost:27017/users" to run it locally in your machine - Kasili Wachiye
  // ==========================================================================================================
  .connect(
    // "mongodb+srv://kasiliwachiye:uU83hxw7jzkPtmMm@cluster0.koiptqu.mongodb.net/?retryWrites=true&w=majority" ||
    "mongodb://localhost:27017/users",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

app.get("/", (req, res) => {
  res.send(
    "🔆WELCOME. BIENVENUE. WILKOMMEN.🔆 \n\n To add a customer, proceed to '/api/customers' and make a POST request passing the -name- of the customer. \n\nTo add an account, proceed to '/api/accounts' and make a POST request passing the -name- of the account, the -customerId- (from customer creation - default MongoDB ObjectID) and optionally, the -balance-. \n\nTo add a card, proceed to '/api/cards' and make a POST request passing the customer -accountId-(from account creation - default MongoDB ObjectID) and the (card) -name- and -number-. \n\nTo perform withdrawals and topups, head on to '/api/withdraw' and '/api/topup' respectively and pass in -amount- and -accountId- (from account creation - default MongoDB ObjectID) to withdraw or deposit."
  );
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Express app is listening on port ${port}`);
});
