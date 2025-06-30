const express = require("express");
const router = express.Router();
const Product = require("../Models/Product");

router.get("/", async(req,res) => {

    try{
        const products = await Product.find();
        res.json(products);
    }catch(error){
        res.json({message: error.message})
    }
});

router.get("/:id", async(req,res) => {

    try{
        const product = await Product.findById(req.params.id);
        if(!product) return res.json({"msg": "No Products Found"});
        res.json(product);
    }catch(error){
        res.json({message: error.message})
    }
});

module.exports = router;