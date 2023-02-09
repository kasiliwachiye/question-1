const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  balance: {
    type: Number,
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  cards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Card",
    },
  ],
});

const Account = mongoose.model("account", accountSchema);

module.exports.Account = Account;