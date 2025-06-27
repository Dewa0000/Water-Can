const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cart = require("../Backend/Routes/cartRoute");
const contact = require("./Routes/contactRoute");
const order = require("./Routes/orderRoute");
const product = require("./Routes/productRoute");
const subscription = require("./Routes/subscriptionRoute");


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {return console.log("Connected to MongoDB")})
.catch((err) => {return console.log("Error Message:", err)});

app.use("/products", product)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {return console.log("Server is running on port 5000")})