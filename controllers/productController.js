//const libros = require('../db/data');
const db = require('../database/models');
const op = db.Sequelize.Op;

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
  searchResults: function (req, res) {
    let resultados = req.query.search
    db.products.findAll({  /* products es el alias del modelo */
      where: [{ nombre: { [op.gt]: "%" + req.query.search } },

      { descripcion: { [op.gt]: "%" + req.query.search } }
      ]
    })
      .then(function (resultados) {
        if (resultados != "") {
          return res.render('searchResults', { search: resultados })
        } else {
          res.send('no se encontraron resultados')
        }

      })
      .catch(error => console.log(error))
    }
}







module.exports = productController;