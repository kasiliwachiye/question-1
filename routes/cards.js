const express = require("express");
const { Account } = require("../models/account");
const router = express.Router();

// model
const { Card } = require("../models/card");

router.post("/", async (req, res) => {
  const card = new Card({
    name: req.body.name,
    number: req.body.number,
    account: req.body.accountId,
  });
  try {
    await card.save();
    const account = await Account.findById(req.body.accountId);
    account.cards.push(card._id);
    await account.save();
    res
      .status(201)
      .send({
        message: `${card.name} card, card number: ${card.number} created with ID: ${card._id}`,
      });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
