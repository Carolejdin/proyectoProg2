const libros = require('../db/data');

//estamos haciendo alusion en cada una de las lineas a las vistas de cada uno: index.ejs, register.ejs y login.ejs
//pruebaaaaa
const productController = {
    product: function (req, res) {
        res.render('product', { id: req.params.id, listaProduct: libros.productos, comentarios: libros.comentarios });
    },
    productAdd: function (req, res) {
        res.render('productAdd');
    },
    searchResults: function (req, res) {
        res.render('searchResults', { listaProductos: libros.productos });
    },

}

module.exports = productController;