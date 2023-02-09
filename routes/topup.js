const express = require("express");
const router = express.Router();

// model
const { Account } = require("../models/account");

router.post("/", (req, res) => {
  Account.findOne({ _id: req.body.accountId }, (err, account) => {
    if (err) return res.status(500).send(err);
    if (!account) return res.status(400).send("Account not found.");

    account.balance += parseInt(req.body.amount);

    account.save((err, updatedAccount) => {
      if (err) return res.status(500).send(err);
      return res.send(updatedAccount);
    });
  });
});

module.exports = router;
