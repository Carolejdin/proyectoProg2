const db = require('../database/models');
const bcrypt = require('bcryptjs');

const users = db.User;

const usersController = {
    profile: function (req, res) {
        res.render('profile', {
            listaUsuarios: data.usuarios,
            listaProductos: libros.productos
        });
    },
    profileEdit: function (req, res) {
        res.render('profileEdit', {
            listaUsuarios: data.usuarios
        });
    },
    create: function (req, res) {
        //mostrar el form de registro
        //Controlar que el usario no esté logueado
        //return res.render('register')
        if (req.session.user != undefined) {
            return res.redirect('/')
        } else {
            return res.render('register');
        }

    },
    store: function (req, res) {
        //Detectar situaciones irregulares o errores.
        res.locals.errores = "";
        let errores = {};

        //Chequear que email no esté vacío
        if (req.body.email == "") {
            errores.message = "El email es obligatorio";
        } else if (req.body.password == "") {
            errores.message = "La contraseña es obligatoria";
        } else if (req.body.password.length < 3) {
            errores.message = "La contraseña debe tener al menos 3 caractéres";
        } else if (req.body.birthDay == "") {
            errores.message = "La fecha de nacimiento es obligatoria";
        } else if (!req.body.profilePic) {
            errores.message = "La foto de perfil es obligatoria";
        }

        if (errores.message) {
            res.locals.errores = errores;
            return res.render('register');
        }
        //Chequear que el email no exista en la base.
        users.findOne({
                where: [{
                    email: req.body.email
                }]
            })
            .then(function (user) {
                if (user !== null) {
                    errores.message = "El email ya existe. Por favor, elija otro.";
                    res.locals.errores = errores;
                    return res.render('register');
                } else {
                    //Obtener los datos del formulario y armar el objeto literal que quiero guardar
                    let user = {
                        email: req.body.email,
                        dni: req.body.DNI,
                        username: req.body.username,
                        password: bcrypt.hashSync(req.body.password, 10), //vamos a hashear la contraseña que viene del formulario.
                        profilePic: req.body.profilePic,
                    }
                    //return res.send (user)
                    //Guardar la info en la base de datos
                    users.create(user)
                        .then(function (userGuardado) { //En el parámetro recibimos el registro que se acaba de crear en la base de datos.
                            //return res.send(userGuardado)
                            //redirigir
                            return res.redirect('/')
                        })
                        .catch(error => console.log(error))
                }
            })
            .catch(errors => {
                console.log("hola", errors);
                return res.render('register');
            })
    },
    login: function (req, res) {
        if (req.session.user != undefined) {
            return res.redirect('/')
        } else {
            return res.render('login')
        }
    },

    signIn: function (req, res) {
        res.locals.errores = "";
        let errores = {};
        users.findOne({
                where: [{
                    email: req.body.email
                }]
            })
            .then(function (user) {
                if (user !== null) {
                    if (bcrypt.compareSync(req.body.password, user.password)) {
                        req.session.user = user.dataValues;
                        //Si el usuario tildó recordarme creo la cookie
                        if (req.body.recordarme) {
                            res.cookie('userId', user.dataValues.id, {
                                maxAge: 1000 * 60 * 100
                            })
                        }
                        return res.redirect('/');
                    } else {
                        errores.message = "Contraseña incorrecta";
                        res.locals.errores = errores;
                        return res.render('login');
                    }
                } else {
                    errores.message = "No existe un usuario con este email";
                    res.locals.errores = errores;
                    console.log("error", errores)
                    return res.render('login');
                }
            })
            .catch(error => {
                console.log(error);
                return res.render('login');
            })
    },
    logout: function (req,res){
        req.session.destroy();
        if(req.cookies.userId !== undefined){
            res.clearCookie('userId')
        }
        return res.redirect('/')
    }
     





}

module.exports = usersController;