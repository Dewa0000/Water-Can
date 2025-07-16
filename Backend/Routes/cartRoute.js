const express = require("express");
const router = express.Router();
const Cart = require("../Models/Cart")

router.get("/", async (req, res) => {
  try {
    const cart = await Cart.findOne().populate("items.productID");

    if (!cart) {
      return res.json({ items: [] });
    }

    const enrichedItems = cart.items.map(item => {
      const product = item.productID;

      if (!product) return null; // In case product is deleted

      return {
        _id: product._id,
        name: product.name,
        price: product.price,
        qty: item.qty
      };
    }).filter(Boolean); // Remove any nulls

    res.json({ items: enrichedItems });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




    // POST /cart
router.post("/", async (req, res) => {
  try {
    const { userId,items } = req.body;

    console.log(userId,items);
    

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "Invalid cart data." });
    }

    if(!userId || !Array.isArray(items) || items.length === 0){
      return res.status(400).json({message: "Invalid Cart Data or userID Missing"})
    }

    // Optional: Clear previous cart if you're only keeping one cart
    await Cart.deleteMany();

    const newCart = new Cart({ userId,items });
    console.log("New Cart:",newCart);
    await newCart.save();

    res.status(201).json({ message: "Cart saved", cart: newCart });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;


