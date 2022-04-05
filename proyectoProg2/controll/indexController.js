const productsData = require('../db/dataProducts');

const productController = {


index:
function (req,res){
    return res.render(dataProducts.lista)

}
}
module.exports = productsData;