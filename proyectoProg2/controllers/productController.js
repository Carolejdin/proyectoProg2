var users = require('../db/data');

//estamos haciendo alusion en cada una de las lineas a las vistas de cada uno: index.ejs, register.ejs y login.ejs
const productController = {
    product: function(req, res) {
        res.render('product', { listaUsuarios: libros.productos});
    },
    productAdd: function(req, res) {
        res.render('product-add', { listaUsuarios: libros.productos});
    },
   
}

module.exports = productController;