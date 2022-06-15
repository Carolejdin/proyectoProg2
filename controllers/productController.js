//const libros = require('../db/data');
const db = require('../database/models/index');
const op = db.Sequelize.Op;
const products = db.Product;

const productController = {
  showForm: function (req, res) {
    if (req.session.user != undefined){
    return res.render('productAdd')
     } else {
         return res.redirect('/users/register')
       }
      },
  nuevoProducto: function (req, res) {
    let errores = { message: "" }
    if (req.body.nombre == '') {
        errores.message = 'Completar el campo nombre';
    }
    else if (req.body.descripcion == '') {
        errores.message = errores.message + 'Completar el campo descripcion';

    }
    else if (req.body.anioDePublicacion == '') {
        errores.message = errores.message + 'Completar el campo año de publicacion';

    }

    else if (req.body.autor == '') {
        errores.message = errores.message + 'Completar el campo autor';
    }

    else if (req.body.comentario == '') {
        errores.message = errores.message + 'Completar el campo comentario';

    }

    else if (req.body.editorial == '') {
        errores.message = errores.message + 'Completar el campo editorial';
    }

    else if (req.file == undefined) {
        errores.message = errores.message + 'Agregar imagen';

    }
    else if  (errores.message.length > 0) {
        res.locals.errores = errores;
        return res.render('productAdd');
    }

let producto ={
  nombre: req.body.nombre,
    descripcion:req.body.descripcion,
    anioDePublicacion:req.body.anioDePublicacion,
    autor:req.body.autor,
    imagen: req.file.filename,
    comentario: req.body.comentario,
    editorial: req.body.editorial,
    usuarioId:req.session.user.id 
}
products.create (producto)
        
        .then(function (results) {
            return res.redirect('/')
        })
        .catch(error => console.log(error))

},
showComment: function(req,res){
  if (req.session.user != undefined){
    return res.redirect('/product')
     } else {
         return res.redirect('/users/register')
       }
},
comentarios: function(req,res){
let comentario = {
    comentario : req.body.comentario,
    productId : req.params.id,
    usuarioId : req.session.user.id,
  }
  db.Comentario.create (comentario)
            .then(function () {
            return res.redirect('/product')
        })
        .catch(error => console.log(error))
},
detalleProducto: function (req, res) {
  console.log(req.params);
  var id = req.params.idProducto
  console.log(id)

  products.findByPk(id,{
      include: [{association: 'users'}, {association: 'comentarios', include: [{association: 'users'}]}]
  })
  .then((producto) => {
      console.log(producto)
      return res.render('product',{
          productos : producto,
          comentarios: [],
      });
  })
.catch((error) => {
  console.log(error)
  return res.send(error);
})
},
showEdit: function(req,res){
res.render('productEdit')
},
edit: function (req,res){
  db.Product.findByPk(req.params.id)
  .then(function(Product){
    res.render('productEdit', {Product});
  })
  .catch(function(error){
    res.send(error)
  })
},


delete: function (req,res){
  bd.Product.destroy({were: {id: req.params.id}})
  .then(function(Product){
    res.redirect('/')
  })
  .catch(function(error){
    res.send(error)
  })
},
}
module.exports=productController