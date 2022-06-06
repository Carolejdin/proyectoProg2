const db = require('../database/models');
const bcrypt = require('bcryptjs');

const users = db.Users;

const usersController = {
    profile: function (req, res) {
        res.render('profile', { listaUsuarios: data.usuarios, listaProductos: libros.productos });
    },
    profileEdit: function (req, res) {
        res.render('profileEdit', { listaUsuarios: data.usuarios });
    }, 
}

module.exports = usersController;