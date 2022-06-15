var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController');
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

router.get('/', controller.index);
router.get('/product', controller.searchResults);
router.get('/login', controller.login);
//router.post('/', upload.single('imagen'), controller.index);
//router.get('/', controller.comentarios)



module.exports = router;


