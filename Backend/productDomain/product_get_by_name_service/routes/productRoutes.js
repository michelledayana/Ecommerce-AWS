const express = require('express');
const router = express.Router();
const { getProductsByName } = require('../controller/productController');

router.get('/products/search', getProductsByName);

module.exports = router;
