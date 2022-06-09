const db = require('../database/models');
const bcrypt = require('bcryptjs');

const users = db.User;

const usersController = {
    profile: function (req, res) {
        res.render('profile', { listaUsuarios: data.usuarios, listaProductos: libros.productos });
    },
    profileEdit: function (req, res) {
        res.render('profileEdit', { listaUsuarios: data.usuarios });
    }, 
    create: function(req, res){
        //mostrar el form de registro
        //Controlar que el usario no esté logueado
      //return res.render('register')
        if(req.session.user != undefined){
            return res.redirect('/')
        } else {
            return res.render('register');
       }
        
    },
    store: function(req, res){
        //Detectar situaciones irregulares o errores.
        let errores = {}

        //Chequear que email no esté vacío
        if(req.body.email == ""){
            errores.message = "El email es obligatorio";
            res.locals.errores = errores;
            return res.render('register');
        } else if(req.body.password == ""){
            errores.message = "La contraseña es obligatoria";
            res.locals.errores = errores;
            return res.render('register');                     
        } else if(req.body.profilePic == undefined){
            errores.message = "La foto de perfil es obligatoria";
            res.locals.errores = errores;
            return res.render('register');                     
        } else if(req.body.birthDay == ""){
            errores.message = "La fecha de nacimiento es obligatoria";
            res.locals.errores = errores;
        }else {
            //Chequear que el email no exista en la base.
            users.findOne({
                where: [{ email: req.body.email}]
            })
            .then( function(user){
                if(user !== null){
                    errores.message = "El email ya existe. Por favor, elija otro.";
                    res.locals.errores = errores;
                    return res.render('/users/register');
                } else {
                    //Obtener los datos del formulario y armar el objeto literal que quiero guardar
                    let user = {
                        email: req.body.email,
                        username: req.body.username,
                        password: bcrypt.hashSync(req.body.password, 10),//vamos a hashear la contraseña que viene del formulario.
                        profilePic: req.file.filename,
                    }
                    //return res.send (user)
                    //Guardar la info en la base de datos
                    users.create(user)
                        .then( function(userGuardado){ //En el parámetro recibimos el registro que se acaba de crear en la base de datos.
                            //return res.send(userGuardado)
                            //redirigir
                            return res.redirect('/')
                        })
                        .catch( error => console.log(error))
                        }
            })                
            .catch(errors => console.log(errors))
            } 



    },
    login: function (req,res){
        if (req.session.user != undefined) {
            return res.redirect ('/')
        } else {
            return res.render ('login')
        }
    },

    signIn: function (req,res){
        users.findOne ({
            where:[{ email:req.body.email}] 
        }) 
        .then(function(user){
            let passencriptada = bcrypt.hashsync (req.body.password, 10)
            let check = bcrypt. compareSync (req.body.password, passencriptada)
            if (check !== false){
                return res.redirect ('/')
            } else {
                return res.send ('Contraseña incorrecta')
            }
        

            //si trajo un usuario hay que chequear la contraseña con compareSync()
            //Si las contraseñas no coincuiden mandamos mensaje de error.

            if(user){
                req.session.user = user.dataValues;
                //Si el usuario tildó recordarme creo la cookie
                res.cookie('userId',user.dataValues.id,{maxAge: 1000*60*100} )
            }
            console.log(req.session.user);
            return res.redirect('/')

        })
        .catch(error => console.log(error))
    }

    

}

module.exports = usersController;