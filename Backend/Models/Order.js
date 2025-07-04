const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
     item: [
        {
            productID: {type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true},
            qty: {type: number, required: true, min: 1}
        }
     ],
     total: {type: Number, required: true},
     cretedAt: {type: Date, default: Date.now()}
})

module.exports = mongoose.model("Cart", cartSchema);