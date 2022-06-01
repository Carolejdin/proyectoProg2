//const product = require("../../controllers/productController");

module.exports = (sequelize, dataTypes) => {
   
    let alias= "comentarios";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        comentario: {
            type: dataTypes.INTEGER,
            allowNull:false
        },
        usuarioId: {
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
    const  comentario = sequelize.define(alias, cols, config)    

//RELACIONES ACA
comentario.associate = function (models){
    comentario.BelongsTo(models.Product,{
        foreignKey: 'productsId',
        as: 'product'
    } );
    comentario.belongsTo(models.User, {
        foreignKey: 'UsuarioId',
        as: 'user'
    })
}


    return comentario;
}