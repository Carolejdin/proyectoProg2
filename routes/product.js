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
//aca van los sufijos
//router.get('/productAdd', controller.productAdd);
router.get('/searchResults', controller.searchResults);
//router.post('/ProductAdd', controller.showForm)
//router.get('/:id', controller.product);
router.get ('/ProductAdd', controller.showForm)

router.post('/store', upload.single('imagen'), controller.store);
router.get ('/productEdit', controller.edit);
router.get ('/ProductAdd', controller.delete);


module.exports = router;