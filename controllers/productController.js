//const libros = require('../db/data');
const db = require('../database/models/index');
const op = db.Sequelize.Op;
const products = db.Product;
const users = db.User;
const comment = db.Comentario;

const productController = {
  showForm: function (req, res) {
    if (req.session.user != undefined) {
      return res.render('productAdd')
    } else {
      return res.redirect('/users/register')
    }
  },
  nuevoProducto: function (req, res) {
    let errores = {
      message: ""
    }
    if (req.body.nombre == '') {
      errores.message = 'Completar el campo nombre';
    } else if (req.body.descripcion == '') {
      errores.message = errores.message + 'Completar el campo descripcion';

    } else if (req.body.anioDePublicacion == '') {
      errores.message = errores.message + 'Completar el campo año de publicacion';

    } else if (req.body.autor == '') {
      errores.message = errores.message + 'Completar el campo autor';
    } else if (req.body.comentario == '') {
      errores.message = errores.message + 'Completar el campo comentario';

    } else if (req.body.editorial == '') {
      errores.message = errores.message + 'Completar el campo editorial';
    } else if (req.file == undefined) {
      errores.message = errores.message + 'Agregar imagen';

    } else if (errores.message.length > 0) {
      res.locals.errores = errores;
      return res.render('productAdd');
    }

    let producto = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      anioDePublicacion: req.body.anioDePublicacion,
      autor: req.body.autor,
      imagen: req.file.filename,
      comentario: req.body.comentario,
      editorial: req.body.editorial,
      usuarioId: req.session.user.id,
      usuarioNombre: req.session.user.username,
    }
    products.create(producto)

      .then(function (results) {
        return res.redirect('/')
      })
      .catch(error => console.log(error))

  },
  showComment: function (req, res) {
    if (req.session.user != undefined) {
      return res.redirect('/product')
    } else {
      return res.redirect('/users/register')
    }
  },
  comentarios: function (req, res) {

    if(req.session.user == undefined){
    res.redirect('/users/login')
  }

    let comentarios = {
      comentario: req.body.comentario,
      productId: req.params.id,
      usuarioId: req.session.user.id,
    }

    comment.create(comentarios)
      .then(function () {
        return res.redirect('/product/' + req.params.id)
      })
      .catch(error => console.log(error))
  },
  
  detalleProducto: function (req, res) {
    products.findByPk(req.params.id, {
        include: [{
          association: 'user'
        }, {
          association: 'comentarios',
          include: [{
            association: 'user'
          }]
        }]
      })
      .then((producto) => {
        //return res.send(producto)
           return res.render('product', {
            producto: producto});
        })
      .catch((error) => {
        console.log(error)
        return res.send(error);
      })
  },
/*   showEdit: function (req, res) {
    res.render('productEdit')
  },
  edit: function (req, res) {
    db.Product.findByPk(req.params.id)
      .then(function (Product) {
        res.render('productEdit', {
          Product
        });
      })
      .catch(function (error) {
        res.send(error)
      })
  }, */


  delete: function (req, res) {
    products.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function (response) {
        return res.redirect('/')
      })
      .catch(function (error) {
        res.send(error)
      })
  },

  edit: function (req, res) {
    products.findOne({
      where: [{
        id: req.params.id
      }]
    }).then((products) => {
      return res.render('productEdit', {
        producto: products
      });
    })
},

edited: function (req, res) {
    if (req.file) req.body.profilePic = (req.file.path).replace('public', '');
    db.Product.update(req.body, {
            where: [{
                id: req.params.id
            }]
        })
        .then(function (data) {
            if (req.file) {
                req.session.user.imagen = req.file.imagen
            }
            res.redirect('/product/' + req.params.id)
        })
        .catch(function (error) {
            console.log(error)
            res.send(error)
        })
},
}
module.exports = productController;