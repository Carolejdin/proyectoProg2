const libros = require('../db/data');
var users = require('../db/data');

//estamos haciendo alusion en cada una de las lineas a las vistas de cada uno: index.ejs, register.ejs y login.ejs
const productController = {
    product: function(req, res) {
        res.render('product', { listaProduct: libros.productos, listaUsuarios: libros.usuarios});
    },
    productAdd: function(req, res) {
        res.render('product-add', { listaUsuarios2: libros.productos});
    },
   
}

module.exports = productController;