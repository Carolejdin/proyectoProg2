//requiero lo q exporta el modelo
//const libros = require('../db/data');
const bcrypt = require('bcryptjs');
const db = require('../database/models');

//un metodo para cada request
const indexController = {
    index: function (req, res) {
        let producto ={
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            anioDePublicacion: req.body.anioDePublicacion,
            autor: req.body.autor,
            comentario: req.body.comentario, 
            editorial: req.body.editorial,
            //imagen: req.file.filename
          }
        return res.render('index', { producto : producto });
    },
    login: function (req, res) {
        return res.render('login', {title: 'login'});
    },
    comentarios: function(req, res){
        let comentario = {
          comentario : req.body.comentario,
          productId : req.params.id,
          usuarioId : req.session.user.id,
    
        }
      }
    
}
    
module.exports = indexController;