const express = require('express');
const cors = require('cors');
import connectDB from './Config/db.js';
import productRoutes from './Routes/productRoutes.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
