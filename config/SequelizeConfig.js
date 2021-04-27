const Sequelize = require("sequelize");
 
const dbConnection = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});
 
module.exports = dbConnection;