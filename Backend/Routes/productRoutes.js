import express from 'express';
import { getAllProducts } from '../Controllers/productController';

const router = express.Router();
router.get('/', getAllProducts);

export default router;
