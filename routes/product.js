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
router.post ('/productAdd', upload.single('imagen'), controller.nuevoProducto);

//editar producto
router.get('/productEdit', controller.edit);
router.post('/productEdit/:id', upload.single('imagen'), controller.edited);

//eliminar productos
router.post ('/:id/delete', controller.delete);

//comentarios
router.post ('/:id', controller.comentarios);

//detalle de producto
router.get ('/:id', controller.detalleProducto);

module.exports = router;