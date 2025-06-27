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
        const products = await Product.findById(req.params.id);
        if(!products) return res.json({"msg": "No Products Found"});
        res.json(products);
    }catch(error){
        res.json({message: error.message})
    }
});

module.exports = router;