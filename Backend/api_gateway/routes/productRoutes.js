const express = require('express');
const router = express.Router();
const productService = require('../services/productService');

router.post('/', productService.createProduct);
router.get('/', productService.listProducts);
router.get('/:id', productService.getProductById);
router.put('/:name', productService.updateProductByName);
router.delete('/:name', productService.deleteProductByName);

module.exports = router;
