module.exports = (sequelize, dataTypes) => {
    let alias= "Follower";
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
    const Follower = sequelize.define(alias, cols, config)    

//RELACIONES ACA
Follower.associate = function(models){
    Follower.belongsToMany(models.User, {
        as: "users",
        through: "followers",
        foreignKey: "usuarioId",
        otherKey: "usuarioId",
        timestamps: true
    });
    Follower.belongsToMany(models.User, {
        as: "user",
        through: "followers",
        foreignKey: "usuarioId",
        otherKey: "usuarioId",
        timestamps: true
    })
  

}

    return Follower;
}
    
