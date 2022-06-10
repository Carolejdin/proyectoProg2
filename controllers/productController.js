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
    //return res.send('hola')
    let palabraBuscada = req.query.search
    let condicion ={ 
      where: [{ nombre: { [op.like]: "%" + palabraBuscada + "%"  } },

      { descripcion: { [op.like]: "%" + palabraBuscada + "%" } }
      ]
    }
  
  db.Product.findAll(condicion)

     .then(function (resultados) {
        if (resultados!= "") {
          return res.render('searchResults', { search: palabraBuscada})
        } else {
          res.send('no se encontraron resultados')
        }

      })
      .catch(error => console.log(error))
    },
    //showForm: function (req, res) {
    //  if (req.session.user != undefined){
     //   return res.redirect('productAdd')
    //  } else {
     //   return res.redirect('register')
     // }
//}
//datos del formularioo
showForm: function (req,res){
  return res.render('productAdd')
},
store: function (req,res){
let producto ={
  nombre: req.body.nombre,
  descripcion: req.body.descripcion,
  anioDePublicacion: req.body.anioDePublicacion,
  autor: req.body.autor,
  editorial: req.body.editorial,
  imagen: req.file.filename
}
db.Product.create(producto)
.then((results) => {return res.redirect('/products')})
.catch ((error) => {return res.send ('Hay un error' + error)})
},
delete: function (req,res){
  bd.Product
}




}

module.exports = productController;