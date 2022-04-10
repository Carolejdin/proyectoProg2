var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController')

router.get('/', controller.index);
router.get('/login', controller.login);
router.get('/register', controller.register);
router.get ('/searchResults',controller.searchResults);

module.exports = router;


