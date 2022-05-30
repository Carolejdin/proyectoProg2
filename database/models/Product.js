module.exports = (sequelize, dataTypes) => {
    let alias= "products";
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
            allowNull: false
        },
        usuario: {
            type:dataTypes.INTEGER,
            allowNull: false
        },
        createdAt : {
            type: dataTypes.DATA,
            allowNull: true
        },
        updatedAt :{
            type: dataTypes.DATA,
            allowNull: true
        },
        deletedAt :{
            type: dataTypes.DATE,
            allowNull: true
        }
    
    }
    let config = {
        tableName: "followers",
        timestamps: true
    }
    const follower = sequelize.define(alias, cols, config)    

//RELACIONES ACA


    return follower;
}
    
