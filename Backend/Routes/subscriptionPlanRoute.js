const express = require("express");
const router = express.Router();
const SubscriptionPlan = require("../Models/SubscriptionPlan");

// GET all subscription plans (public)
router.get("/subscription-plans", async (req, res) => {
  try {
    const plans = await SubscriptionPlan.find({});
    res.status(200).json(plans);
  } catch (err) {
    console.error("Failed to fetch plans:", err);
    res.status(500).json({ error: "Failed to fetch subscription plans" });
  }
});

module.exports = router;
