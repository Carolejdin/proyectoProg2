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
            include: [ { association: 'user' }]
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
      searchResults: function (req,res){
        let palabraBuscada = req.query.search
        products.findAll({
            where: [{nombre: {[op.like]: "%" + palabraBuscada + "%"}},
            {descripcion: {[op.like]: "%" + palabraBuscada + "%"}}]
        })
        .then((data) => {    
     if (data.length>0) {
    return res.render('searchResults', { producto: palabraBuscada},)
            } else {
                res.send('Oops! No se encontraron resultados para tu búsqueda')
              }
        
        })
        .catch ((error)=> {
            return res.send(error)
        })

      

}
}
  
module.exports = indexController;