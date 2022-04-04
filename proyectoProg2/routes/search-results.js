//Para que se ejecute express, primero lo llamo y despues lo ejecuto
const express = require ('express');

const router = express.Router();

//Para entrar y linkear con el controlador
const searchResultsController = require('../controllers/search-resultsController');

router.get('/', searchResultsController.index)

module.exports = router