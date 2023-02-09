const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true,
  },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
    required: true,
  },
});

const Card = mongoose.model('card', cardSchema);

module.exports.Card = Card;