const express = require("express");
const router = express.Router();
const Order = require("../Models/Order");
const authMiddleware = require("../Middleware/requireAuth");

// GET /my-orders - Fetch all orders for logged-in user
router.get("/my-orders", authMiddleware, async (req, res) => {
  try {
    console.log("Fetching orders for user:", req.userId);
    const allOrders = await Order.find({});
    console.log("All orders:", allOrders); // Log userId

    const orders = await Order.find({ userId: req.userId }).sort({ createdAt: -1 });
    const mappedOrders = orders.map((order) => (
      {
        id: order._id,
        date: order.createdAt,
        status: order.status || "Processing",
        amount: order.total
      }
    ));
    res.status(200).json(mappedOrders);
  } catch (err) {
    console.error("Failed to fetch orders:", err);
    res.status(400).json({ error: "Failed to fetch orders" });
  }
});

// POST / - Place a new order
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { name, email, phone, address, notes, items, total } = req.body;

    if (!name || !phone || !address || !items || items.length === 0) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newOrder = new Order({
      userId: req.userId, // ✅ This links order to logged-in user
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
    console.error("Error placing order:", err);
    res.status(500).json({ message: "Failed to place order" });
  }
});

module.exports = router;
