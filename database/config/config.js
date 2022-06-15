module.exports= 
{
  "development": {
    "username": "root",
    "password": "root",
    "database": "books_db",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "define":{
      "paranoid":true 
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "books_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "books_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}
// aca vamos a poner toda la info de la db, nombre de la db, contrasena, usuario, tipo de la misma, etc
