const libros = require('../db/data');
var data = require('../db/data');

//estamos haciendo alusion en cada una de las lineas a las vistas de cada uno: index.ejs, register.ejs y login.ejs
const usersController = {
    profile: function (req, res) {
        res.render('profile', { listaUsuarios: data.usuarios, listaProductos: libros.productos });
    },
    profileEdit: function (req, res) {
        res.render('profileEdit', { listaUsuarios: data.usuarios });
    },

}

module.exports = usersController;