//requiero lo q exporta el modelo
//const libros = require('../db/data');
const bcrypt = require('bcryptjs');
const db = require('../database/models');

//un metodo para cada request
const indexController = {
    index: function (req, res) {
        res.render('index');
    },
    login: function (req, res) {
        return res.render('login', {title: 'login'});
    },
    
}
    
module.exports = indexController;