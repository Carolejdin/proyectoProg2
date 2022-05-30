var express = require('express');
var router = express.Router();
var controller = require('../controllers/usersController')

router.get('/profile', controller.profile);
router.get('/profileEdit', controller.profileEdit);


module.exports = router;
