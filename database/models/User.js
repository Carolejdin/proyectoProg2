module.exports = (sequelize, dataTypes) => {
   
    let alias= "User";
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
        tableName: "users",
        timestamps: true
    }
    const User = sequelize.define(alias, cols, config)    

//RELACIONES ACA
User.associate = function (models){
   
    User.hasMany(models.Product, {
        foreignKey: 'productId',
        as: 'products'
    }),
   User.hasMany(models.Comentario, {
            foreignKey: 'userId',
            as: 'comentarios'
        } ),
    User.belongsToMany(models.User, {
        as: 'seguido',
        through: 'seguidores',
        foreignKey:'seguidorId',
        timestamps: true
 }),
 User.belongsToMany(models.User, {
    as: 'seguidor',
    through: 'seguidores',
    foreignKey:'seguidorId',
    timestamps: true
})
    }



    return User;
}