const express = require("express");
const router = express.Router();
const Cart = require("../Models/Cart");

// GET /cart/:userId → fetch cart for a user
router.get("/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate("items.productID");

    if (!cart) return res.json({ items: [] });

    const enrichedItems = cart.items.map(item => {
      const product = item.productID;
      if (!product) return null;

      return {
        _id: product._id,
        name: product.name,
        price: product.price,
        qty: item.qty
      };
    }).filter(Boolean);

    res.json({ items: enrichedItems });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /cart → save cart for a user
router.post("/", async (req, res) => {
  try {
    const { userId, items } = req.body;

    if (!userId || !Array.isArray(items)) {
      return res.status(400).json({ message: "Missing userId or items" });
    }

    // overwrite existing cart for user
    await Cart.findOneAndDelete({ userId });

    const newCart = new Cart({ userId, items });
    await newCart.save();

    res.status(201).json({ message: "Cart saved", cart: newCart });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
