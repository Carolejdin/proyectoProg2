//const product = require("../../controllers/productController");

module.exports = (sequelize, dataTypes) => {
   
    let alias= "Comentario";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        comentario: {
            type: dataTypes.INTEGER,
        
        },
        usuarioId: {
            type:dataTypes.INTEGER
    
        },
       productId: {
           type:dataTypes.INTEGER
       },
        createdAt : {
            type: dataTypes.DATE,
            allowNull: true
        },
        updatedAt : {
            type: dataTypes.DATE,
            allowNull: true
        },
        deletedAt :{
            type: dataTypes.DATE,
            allowNull: true
        }
    
    }
    let config = {
        tableName: "comentarios",
        timestamps: true
    }
const  Comentario = sequelize.define(alias, cols, config)    

// RELACIONES ACA
Comentario.associate = function (models){
    Comentario.belongsTo(models.Product,{
        foreignKey: 'productId',
        as: 'product'
    } );
    Comentario.belongsTo(models.User, {
        foreignKey: 'usuarioId',
        as: 'user'
    })
}


    return Comentario;
}