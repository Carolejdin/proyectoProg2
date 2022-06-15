var express = require('express');
var router = express.Router();
var controller = require('../controllers/productController')
const multer = require('multer');
const path = require('path')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/images')) //Usamos path.join para evitar problemas de rutas. __dirname da la posición exacta de la carpeta en la que está el archivo. Luego desde ahí nos movemos hasta la carpeta public.
      //Las carpetas deben existir.
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  
var upload = multer({ storage: storage })

//agregar producto
router.get ('/productAdd', controller.showForm)
router.post ('/', upload.single('imagen'), controller.nuevoProducto);

//comentarios
router.post ('/:id/comentar', controller.comentarios);
router.get ('/:id/comentar', controller.showComment);

//detalle de producto
router.get ('/', controller.detalleProducto);

//editar producto
router.post ('/productEdit', controller.edit);
router.get ('/productEdit', controller.showEdit);


//eliminar productos

router.post ('/productAdd', controller.delete);


module.exports = router;