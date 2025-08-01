const express = require("express"); 
const router = express.Router();
const SubscriptionPlan = require("../Models/SubscriptionPlan");
const authMiddleware = require("../Middleware/requireAuth");

router.get("/my-subscription", authMiddleware, async(req,res) => {
    try{
        console.log("Fetching subscription for user:", req.userId);
        const allSubscription = await SubscriptionPlan.findOne({});
        console.log("All Subscription:", allSubscription);
    }catch(err){
        console.log("Error fetching Subscription:", err.message)
    }
}
);