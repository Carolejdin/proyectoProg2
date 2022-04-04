//Para que se ejecute express, primero lo llamo y despues lo ejecuto
const express = require ('express');

const router = express.Router();

//Para entrar y linkear con el controlador
const loginController = require('../controllers/loginController');

router.get('/', loginController.index)

module.exports = router