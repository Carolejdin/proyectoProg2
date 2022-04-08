var users = require('../db/data');

//estamos haciendo alusion en cada una de las lineas a las vistas de cada uno: index.ejs, register.ejs y login.ejs
const usersController = {
    profile: function(req, res) {
        res.render('profile', { listaUsuarios: libros.usuarios});
    },
    profileEdit: function(req, res) {
        res.render('profileEdit', { listaUsuarios: libros.usuarios});
    },
   
}

module.exports = usersController;