var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController')

router.get('/profile', controller.profile);
router.get('/profile-edit', controller.profileEdit);


module.exports = router;
