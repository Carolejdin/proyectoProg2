module.exports = (sequelize, dataTypes) => {
    let alias= "followers";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        seguidor: {
            type: dataTypes.INTEGER
        },
        seguido: {
            type:dataTypes.INTEGER
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
        tableName: "followers",
        timestamps: true
    }
    const follower = sequelize.define(alias, cols, config)    

//RELACIONES ACA
follower.associate = function(models){
    follower.belongsToMany(models.users, {
        as: "users",
        through: "followers",
        foreignKey: "usuarioId",
        otherKey: "usuarioId",
        timestamps: true
    });
    follower.belongsToMany(models.users, {
        as: "user",
        through: "followers",
        foreignKey: "usuarioId",
        otherKey: "usuarioId",
        timestamps: true
    })
  

}

    return follower;
}
    
