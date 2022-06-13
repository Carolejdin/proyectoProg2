var express = require('express');
var router = express.Router();
var controller = require('../controllers/usersController')

let multer = require('multer');
let path = require('path');

//confirgurar multer
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

router.get('/profile', controller.profile);
router.get('/profileEdit', controller.profileEdit);
router.get('/register', controller.create);
router.post('/register', controller.store);
router.get ('/login', controller.login);
router.post ('/login', controller.signIn);
router.post('/logout', controller.logout);
//router.post('/store', upload.single('profilePic'), controller.store);


module.exports = router;