// Backend/Models/UserSubscription.js
const mongoose = require("mongoose");

const userSubscriptionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  phone: { type: String, required: true },
  address: { type: String, required: true },
  notes: String,
  planDetails: {
    planId: { type: mongoose.Schema.Types.ObjectId, ref: "SubscriptionPlan", required: true },
    title: { type: String, required: true },
    price: { type: String, required: true },
    features: [{ type: String }]
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Auth", required: true },
  status: { type: String, enum: ['pending', 'active', 'cancelled'], default: 'pending' },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("UserSubscription", userSubscriptionSchema);