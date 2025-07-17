const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Cart = require("./Routes/cartRoute");
const Signup = require("./Routes/userRoutes")
const Order = require("./Routes/orderRoute");
const Product = require("./Routes/productRoute");
const Login = require("./Routes/userRoutes")




dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());


mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MongoDB");
})
    .catch((err) => { return console.log("Error Message:", err) });

app.use("/products", Product);
app.use("/cart", Cart);
app.use("/checkout", Order );
app.use("/signup", Signup);
app.use("/api/user", Login);
app.use("/auth", require("./Routes/authRoute"))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { return console.log("Server is running on port 5000") })

