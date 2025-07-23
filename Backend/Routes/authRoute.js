const express = require("express");
const router = express.Router();
const authMiddleware = require("../Middleware/requireAuth");
const User = require("../Models/User");
const Order = require("../Models/Order")

router.get("/me", authMiddleware, async(req,res) => {
    try{
        const user = await User.findById(req.userId).select("-password");
        if(!user){
            return res.status(404).json({message:"User Not Found"})
        }
        res.json(user);
    }catch(err){
        res.status(500).json({message:"Server Error Using Fetch Data"})
    }
});

router.get("/", requireAuth, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;