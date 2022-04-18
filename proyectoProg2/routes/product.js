var express = require('express');
var router = express.Router();
var controller = require('../controllers/productController')
//aca van los sufijos
router.get('/productAdd', controller.productAdd);
router.get('/searchResults', controller.searchResults);
router.get('/:id', controller.product);


module.exports = router;