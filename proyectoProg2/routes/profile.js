//Para que se ejecute express, primero lo llamo y despues lo ejecuto
const express = require ('express');

const router = express.Router();

//Para entrar y linkear con el controlador
const profileController = require('../controllers/profileController');

router.get('/', profileController.index)

module.exports = router