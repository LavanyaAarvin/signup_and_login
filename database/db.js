const { Sequelize, Model } = require('sequelize')

const sequelize = new Sequelize('test-db', 'user', 'pass', {
    dialect: 'sqlite',
    host: '/home/nextbrain/.local/share/DBeaverData/workspace6/.metadata/sample-database-sqlite-1/Chinook.db'
})

module.exports = sequelize