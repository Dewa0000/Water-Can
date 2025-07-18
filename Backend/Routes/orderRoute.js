const express = require("express");
const router = express.Router();
const Order = require("../Models/Order");
const authMiddleware = require("../Middleware/requireAuth");

router.get("/my-orders", authMiddleware, async (req,res) => {
  try {
    const orders = await Order.find({userId : req.userId}).sort({createdAt : -1});
    res.json(orders);
  }catch(err){
    res.status(400).json({err: "Failed to fetch Orders"})
  }
})

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, address, notes, items, total } = req.body;

    if (!name || !phone || !address || !items || items.length === 0) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newOrder = new Order({
      name,
      email,
      phone,
      address,
      notes,
      items,
      total,
    });

    await newOrder.save();

    res.status(201).json({
      message: "Order placed successfully",
      order: newOrder,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
