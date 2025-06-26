const express = require('express');
const router = express.Router();
const { getAllProducts } = require('../Controllers/productController');

router.get('/', getAllProducts);

module.exports = router;
