//requiero lo q exporta el modelo
const libros = require('../db/data');

//un metodo para cada request
const indexController = {
    index: function(req, res) {
        res.render('index', { listaProductos: libros.productos});
    },
    login: function(req, res) {
        res.render('login',  );
    },
    register: function(req, res) {
        res.render('register', );
    },
    
}
//exportamos la variable
module.exports = indexController;