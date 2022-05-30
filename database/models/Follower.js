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
    
