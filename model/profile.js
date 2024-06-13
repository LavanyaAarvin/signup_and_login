const { Model, DataTypes} = require('sequelize');

const sequelize = require('../database/db')

class Profile extends Model {}

Profile.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    applicationName: {
        type: DataTypes.STRING
    },
    applicationOwner: {
        type: DataTypes.NUMBER
    },
    is_active: {
        type: DataTypes.NUMBER
    },
}, {
    
    sequelize,
    modelName: 'Profile'
    
})

module.exports = Profile;