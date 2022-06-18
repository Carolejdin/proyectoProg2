//requiero lo q exporta el modelo
//const libros = require('../db/data');
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const op = db.Sequelize.Op;
const products = db.Product
//un metodo para cada request
const indexController = {
    index: function (req, res) {
        products.findAll( {
            include: [ { association: 'user' }, {
              association: 'comentarios',
              include: [{
                association: 'user'
              }]
            }]
        },
        {
            order: [[ "createdAt" , "DESC"]]
        })
          .then(function(results){
              return res.render('index', {producto : results})
           })
         .catch(function(error){
             console.log(error)
        })
    },
    login: function (req, res) {
        return res.render('login', {title: 'login'});
    },
    /* comentarios: function(req, res){
        let comentario = {
          comentario : req.body.comentario,
          productId : req.params.id,
          usuarioId : req.session.user.id
        }
      },*/
      searchResults: (req, res) => {
        let palabraBuscada = req.query.search;
        let condicion = {
            where :{
             [op.or]: [
               { nombre: { [op.like]: `%${ palabraBuscada}%` } },
               { descripcion: { [op.like]: `%${ palabraBuscada}%` } }
             ]
           }, 
            include: [ { association: 'user' }]
           }
      
        products.findAll(condicion)
        .then((result) => {
        return res.render('searchResults', { product : result } )
        }).catch((err) => {
            console.log(err);
        });
    }

    }
  
module.exports = indexController;