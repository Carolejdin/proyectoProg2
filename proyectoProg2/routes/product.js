var express = require('express');
var router = express.Router();
var controller = require('../controllers/productController')
//aca van los sufijos
router.get('/add', controller.productAdd);
router.get('/:id', controller.product);



module.exports = router;