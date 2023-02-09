const express = require("express");
const router = express.Router();
// model
const { Card } = require("../models/card.model");

router.post("/cards", async (req, res) => {
  const card = new Card({
    number: req.body.number,
    account: req.body.accountId,
  });
  try {
    await card.save();
    const account = await Account.findById(req.body.accountId);
    account.cards.push(card._id);
    await account.save();
    res.status(201).send({ message: `Card created with id ${card._id}` });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
