//Para que se ejecute express, primero lo llamo y despues lo ejecuto
const express = require ('express');

const router = express.Router();

//Para entrar y linkear con el controlador
const headerLogueadoController = require('../controllers/headerLogueadoController');

router.get('/', headerLogueadoController.index)

module.exports = router