//Para que se ejecute express, primero lo llamo y despues lo ejecuto
const express = require ('express');

const router = express.Router();

//Para entrar y linkear con el controlador
const profileEditController = require('../controllers/profile-editController');

router.get('/', profileEditController.index)

module.exports = router