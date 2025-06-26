const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ name: '20L Can', price: 40 }]);
});

module.exports = router;
