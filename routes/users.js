var express = require('express');
var router = express.Router();
var controller = require('../controllers/usersController')

let multer = require('multer');
let path = require('path');

//confirgurar multer
var storage = multer.diskStorage({ // recibe dentro del objeto literal dos propiedades que son funciones
    destination: function (req, file, cb) { //ruta donde voy a guardar el archivo
      cb(null, path.join(__dirname, '../public/images')) //Usamos path.join para evitar problemas de rutas. __dirname da la posición exacta de la carpeta en la que está el archivo. Luego desde ahí nos movemos hasta la carpeta public.
      //Las carpetas deben existir.
    },
    filename: function (req, file, cb) { //nombre que le voy a asignar al archivo
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
var upload = multer({ storage: storage }) //guardamos la ejecución de multer en una variable

router.get('/profile', controller.profile);
router.post('/seguir/:id?', controller.seguir);
router.get('/profileEdit', controller.profileEdit);
router.post('/profileEdit', upload.single('profilePic'), controller.updateProfile);
router.get('/register', controller.create);
router.post('/register', upload.single('profilePic'), controller.store);
router.get ('/login', controller.login);
router.post ('/login', controller.signIn);
router.post('/logout', controller.logout);


//router.post('/profile', controller.seguir);
/* //router.get('/test', controller.test);
router.get('/seguir', controller.seguir);
router.get('/unfollow', controller.unfollow) */


//router.post('/store', upload.single('profilePic'), controller.store);


module.exports = router;