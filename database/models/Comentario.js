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
    const  comentarios = sequelize.define(alias, cols, config)    

//RELACIONES ACA
comentarios.associate = function (models){
    comentarios.belongsTo(models.products,{
        foreignKey: 'productsId',
        as: 'products'
    } );
    comentarios.belongsTo(models.users, {
        foreignKey: 'UsuarioId',
        as: 'users'
    })
}


    return comentarios;
}