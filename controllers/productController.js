//const libros = require('../db/data');
const db = require('../database/models');
const op = db.Sequelize.Op;
const productController = {
  //resultados de busqueda
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
//mostrar el form de agregar producto
showProductAdd: function (req,res){
  return res.render('productAdd')
},
//guarda la info de agregar producto
store: function (req,res){
let producto ={
  nombre: req.body.nombre,
  descripcion: req.body.descripcion,
  anioDePublicacion: req.body.anioDePublicacion,
  autor: req.body.autor,
  editorial: req.body.editorial,
  imagen: req.file.imagen
}
db.Product.create(producto)
.then((results) => {return res.redirect('/products')})
.catch ((error) => {return res.send ('Hay un error' + error)})
},
//elimina producto
delete: function (req,res){
  bd.Product.destroy ({were: {id: req.params.id}})
  .then(function(Product){
    res.redirect('/')
  })
  .catch(function(error){
    res.send(error)
  })

},
//edita el producto
edit: function (req,res){
  db.Product.findByPk(req.params.id)
  .then(function(Product){
    res.render('productEdit', {Product});
  })
  .catch(function(error){
    res.send(error)
  })
},
//guarda la info del edit
update: function (req,res){
  db.Product.update(req.body, {where: {id: req.params.id}})
  .then(function(Product){
    res.redirect('/');
  })
  .catch(function(error){
    res.send(error)
  })
},

}
module.exports = productController;