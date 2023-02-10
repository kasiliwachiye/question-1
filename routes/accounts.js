const express = require("express");
const router = express.Router();

// models
const { Account } = require("../models/account");
const { Customer } = require("../models/customer");

router.post("/", async (req, res) => {
  const account = new Account({
    customer: req.body.customerId,
    balance: req.body.balance,
  });

  try {
    await account.save();
    const customer = await Customer.findById(req.body.customerId);
    customer.accounts.push(account._id);
    await customer.save();
    res.status(201).send({ message: `Account created with id ${account._id}` });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
