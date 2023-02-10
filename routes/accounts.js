const express = require("express");
const router = express.Router();

// models
const { Account } = require("../models/account");
const { Customer } = require("../models/customer");

router.get("/", async (req, res) => {
  const accounts = await Account.find().sort("name");
  res.send(accounts);
});

router.post("/", async (req, res) => {
  const account = new Account({
    name: req.body.name,
    customer: req.body.customerId,
    balance: req.body.balance,
  });

  try {
    await account.save();
    const customer = await Customer.findById(req.body.customerId);
    customer.accounts.push(account._id);
    await customer.save();
    res.status(201).send({
      message: `${account.name} Account, created with ID: ${account._id}. Current balance: ${account.balance}`,
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
