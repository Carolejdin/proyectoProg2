module.exports = (sequelize, dataTypes) => {
   
    let alias= "Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false
        },
        autor: {
            type:dataTypes.STRING,
            allowNull: false
        },
        anioDePublicacion: {
            type:dataTypes.DATE,
        },
        editorial: {
            type:dataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type:dataTypes.STRING,
            allowNull: false
        },
        imagen: {
            type:dataTypes.STRING,
            allowNull: false
        },
        comentario: {
            type:dataTypes.STRING,
        },
        createdAt : {
            type: dataTypes.DATE,
            allowNull: true
        },
        updatedAt :{
            type: dataTypes.DATE,
            allowNull: true
        },
        deletedAt :{
            type: dataTypes.DATE,
            allowNull: true
        }
    
    }
    let config = {
        tableName: "products",
        timestamps: true
    }
    const Product = sequelize.define(alias, cols, config)    

//RELACIONES ACA
Product.associate = function (models) {
    Product.belongsTo (models.User,{
        foreignKey: 'usuarioId',
        as: 'users'
    } );
    Product.hasMany (models.Comentario,{
        foreignKey: 'comentarioId',
        as: 'comentarios'
    } );
}
    return Product;
}