const mongoose = require('mongoose');

const subscriptionPlanSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true }, // Store as string to match "₹499" format
  features: [{ type: String }],
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SubscriptionPlan', subscriptionPlanSchema); 