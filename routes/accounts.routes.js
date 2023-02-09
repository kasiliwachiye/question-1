const express = require("express");
const router = express.Router();
// model
const { Account } = require("../models/account.model");

router.post("/accounts", async (req, res) => {
  const account = new Account({
    balance: req.body.balance,
    customer: req.body.customerId,
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