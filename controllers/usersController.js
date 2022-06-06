/* //const libros = require('../db/data');
//var data = require('../db/data');
const libros = require('../database/models');
const data = require('../database/models');

//estamos haciendo alusion en cada una de las lineas a las vistas de cada uno: index.ejs, register.ejs y login.ejs
const usersController = {
    profile: function (req, res) {
        res.render('profile', { listaUsuarios: data.usuarios, listaProductos: libros.productos });
    },
    profileEdit: function (req, res) {
        res.render('profileEdit', { listaUsuarios: data.usuarios });
    }, 

}

module.exports = usersController; */

const usersController = {
    profile: function (req, res) {
        res.render('profile', { listaUsuarios: data.usuarios, listaProductos: libros.productos });
    },
    profileEdit: function (req, res) {
        res.render('profileEdit', { listaUsuarios: data.usuarios });
    }, 

}


const db = require('../database/models');
const bcrypt = require('bcryptjs');
const req = require('express/lib/request');
const res = require('express/lib/response');

 let usuario = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    birthDay: req.body.birthDay,
    DNI: req.body.DNI,
    profilePic: req.body.profilePic,
};

db.User.create(usuario)
.then((results)=> {
    return results.redirect('/')
}).catch(error => console.log(error))

const userController = {
    register: function(req, res){
        //return res.render('register');

       if(req.session.user != undefined){
           return res.redirect('/')
       } else{
           return res.render('register');
       }
    },
     
}

let errors = {};


/* if(req.body.username == ""){
    errors.message = "Complete el nombre de usuario";
    res.locals.errors = errors;
    return res.redirect('register');
}else{
    return res.render('/')
}

if(req.body.email == ""){
    errors.message = "Complete el email";
    res.locals.errors = errors;
    return res.render('register');
}

if(req.body.password == ""){
    errors.message = "Complete el email";
    res.locals.errors = errors;
    return res.render('register');
} */
    
    

module.exports = usersController; 
