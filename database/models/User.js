module.exports = (sequelize, dataTypes) => {
   
    let alias= "users";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        username: {
            type: dataTypes.STRING,
            allowNull:false
        },
        email: {
            type:dataTypes.STRING,
            allowNull:false
        },
        birthday:{
            type:dataTypes.DATE
        },
        password:{
            type:dataTypes.STRING,
            allowNull:false
        },
        dni: {
            type: dataTypes.STRING,
            allowNull:false  
        },
        profilePic: {
            type: dataTypes.STRING,
            allowNull:false 
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
    const user = sequelize.define(alias, cols, config)    

//RELACIONES ACA
user.associate = function (models){
   
    user.hasMany(models.products, {
        foreignKey: 'productId',
        as: 'products'
    }),
   user.hasMany(models.comentarios, {
            foreignKey: 'comentarioId',
            as: 'comentarios'
        } );
    }



    return user;
}