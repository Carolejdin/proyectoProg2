//Para que se ejecute express, primero lo llamo y despues lo ejecuto
const express = require ('express');

const router = express.Router();

//Para entrar y linkear con el controlador
const productAddController = require('../controllers/product-addController');

router.get('/', productAddController.index)

module.exports = router