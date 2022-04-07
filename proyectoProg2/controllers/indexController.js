const libros = require('../db/data');
var main = require('../db/data');

//estamos haciendo alusion en cada una de las lineas a las vistas de cada uno: index.ejs, register.ejs y login.ejs
const indexController = {
    index: function(req, res) {
        res.render('index', { listaProductos: libros.productos});
    },
    login: function(req, res) {
        res.render('login', );
    },
    register: function(req, res) {
        res.render('register', );
    }
}

module.exports = indexController;