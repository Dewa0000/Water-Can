const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    userId: { type: String, required: true }
,

     items: [
        {
            productID: {type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true},
            qty: {type: Number, required: true, min: 1}
        }
     ],
     createdAt: {type: Date, default: Date.now()}
})

module.exports = mongoose.model("Cart", cartSchema);