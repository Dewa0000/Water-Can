const express = require('express');
const router = express.Router();
const SubscriptionPlan = require('../Models/SubscriptionPlan');

// Get all active subscription plans
router.get('/plans', async (req, res) => {
  try {
const plans = await SubscriptionPlan.find({}).sort({ price: 1 });
    res.json(plans);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching subscription plans', error: error.message });
  }
});

// Create a new subscription plan (admin only)
router.post('/plans', async (req, res) => {
  try {
    const { title, price, features } = req.body;
    const newPlan = new SubscriptionPlan({
      title,
      price,
      features
    });
    const savedPlan = await newPlan.save();
    res.status(201).json(savedPlan);
  } catch (error) {
    res.status(400).json({ message: 'Error creating subscription plan', error: error.message });
  }
});

// Update a subscription plan (admin only)
router.put('/plans/:id', async (req, res) => {
  try {
    const updatedPlan = await SubscriptionPlan.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    );
    if (!updatedPlan) {
      return res.status(404).json({ message: 'Subscription plan not found' });
    }
    res.json(updatedPlan);
  } catch (error) {
    res.status(400).json({ message: 'Error updating subscription plan', error: error.message });
  }
});

// Delete a subscription plan (admin only)
router.delete('/plans/:id', async (req, res) => {
  try {
    const deletedPlan = await SubscriptionPlan.findByIdAndDelete(req.params.id);
    if (!deletedPlan) {
      return res.status(404).json({ message: 'Subscription plan not found' });
    }
    res.json({ message: 'Subscription plan deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting subscription plan', error: error.message });
  }
});

module.exports = router;