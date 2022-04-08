var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController')
//aca van los sufijos
router.get('/', controller.product);
router.get('/add', controller.productAdd);


module.exports = router;