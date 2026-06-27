const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

router.post("/", async (req, res) => {
  try {
    const cartItem = new Cart(req.body);
    await cartItem.save();

    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
router.get("/", async (req, res) => {
  const items = await Cart.find();
  res.json(items);
});
router.delete("/:id", async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);

  res.json({
    message: "Item removed from cart",
  });
});
module.exports = router;