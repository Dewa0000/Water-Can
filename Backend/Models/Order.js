// models/Order.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  phone: { type: String, required: true },
  address: { type: String, required: true },
  notes: String,
  items: [
    {
      productID: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      qty: Number,
    },
  ],
  total: Number,
  userId: {type: mongoose.Schema.Types.ObjectId, ref: "Auth", required: true},
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
