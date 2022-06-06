//const libros = require('../db/data');
 const db= require ('../database/models');
const op = db.Sequelize.op;
let resultados = req.query.search 
//estamos haciendo alusion en cada una de las lineas a las vistas de cada uno: index.ejs, register.ejs y login.ejs
//pruebaaaaa

  //  product: function (req, res) {
   //     res.render('product', { id: req.params.id, listaProduct: libros.productos, comentarios: libros.comentarios });
  //  },
   // productAdd: function (req, res) {
   //     res.render('productAdd');
   // },
  //  searchResults: function (req, res) {
  //      res.render('searchResults', { listaProductos: libros.productos });
   // },
   const productController = {
 searchResults:function(req,res){ 
    
   db.products.findAll({  /* products es el alias del modelo */
         where:{ model:{[op.gt]:"%" + req.query.search }}
        })
      
   
         .then (function(resultados){
           return res.render ('searchResults', {search: resultados})
         })
         .catch(error => console.log(error)) 
 
 }
}
 


 module.exports = productController; 