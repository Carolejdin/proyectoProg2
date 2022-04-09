var express = require('express');
var router = express.Router();
var controller = require('../controllers/productController')
//aca van los sufijos
router.get('/:id', controller.product);
router.get('/add', controller.productAdd);


module.exports = router;