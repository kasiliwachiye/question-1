const express = require("express");
const router = express.Router();
// model
const { Customer } = require("../models/customer");

router.get("/", async (req, res) => {
  const customers = await Customer.find().sort("name");
  res.send(customers);
});

router.post("/", async (req, res) => {
  const customer = new Customer({
    name: req.body.name,
  });

  try {
    await customer.save();
    res
      .status(201)
      .send({ message: `Customer created with id ${customer._id}` });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
