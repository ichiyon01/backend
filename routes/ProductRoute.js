const express = require('express');
const Product = require ('../controllers/Products.js');

const router = express.Router();

router.get('/', Product.getProducts);
router.get('/:id', Product.getProductById);
router.post('/', Product.saveProduct);
router.patch('/:id', Product.updateProduct);
router.delete('/:id', Product.deleteProduct);

module.exports = router;