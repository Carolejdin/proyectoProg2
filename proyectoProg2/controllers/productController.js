// const libros = require('../db/dataProducts');
const productsData = require('../db/dataProducts');

const productsController = {

    index:
        function (req,res){
        return res.render(libros.lista)

}
}

module.exports = productsController;