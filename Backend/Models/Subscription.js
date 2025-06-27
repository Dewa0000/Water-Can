const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  plan: { type: String, required: true },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, required: true },
});

module.exports = mongoose.model('Subscription', subscriptionSchema);