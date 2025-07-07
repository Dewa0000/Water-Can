const express = require("express");
const router = express.Router();
const Cart = require("../Models/Cart")

router.get("/", async (req,res) => {
    try{
        const cart = await Cart.findOne().populate("item.productID");
    res.json(cart || {items : []})

    }catch(err){
        res.json({message:err.message})
    }
    });

module.exports = router;


