const express = require("express");
const router = express.Router();
const Subscription = require("../Models/SubscriptionPlan");
const authMiddleware = require("../Middleware/requireAuth");

router.get("/my-subscription", authMiddleware, async (req, res) => {
    try {
        console.log("Fetching subscription for user:", req.userId);
        const allSubscription = await Subscription.find({});
        console.log("All subscription:", allSubscription);

        const subscription = await Subscription.find({ userId: req.userId }).sort({ createdAt: -1 });
        const mappedSubscription = subscription.map((sub) => (
            {
                id: sub._id,
                startDate: sub.startDate,
                status: sub.status,
                total: sub.total
            }

        ))
        res.status(200).json(mappedSubscription);
    } catch (error) {
        console.error("Failed to fetch subscription:", error);
        res.status(400).json({ error: "Failed to fetch subscription" });
    }
})

router.post("/", authMiddleware, async (req,res) => {
    try{
        const {name,email,phone,address,notes,planDetails,status,startDate,endDate} = req.body;

    if(!name || !phone || !email || !address || !planDetails || !notes || !status){
        return res.status(400).json({message: "Missing Required Fields"})
    }

    const newSubscription = new Subscription({
        userId:req.userId,
        name,
        email,
        phone,
        address,
        notes,
        planDetails,
        status,
        startDate,
        endDate
    })

    await newSubscription.save();

    res.status(201).json({
        message: "Order Placed Successfully",
        subscription: newSubscription
    })
}catch(err){
    console.error("Error Placing Subscription:", err);
    res.status(500).json({message: "Failed to place Subscription" })
}
})

module.exports = router;