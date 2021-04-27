const Sequelize = require("sequelize");
const dbConnection = require("../config/SequelizeConfig");
const { DataTypes } = Sequelize;

const Employee = dbConnection.define('Employee', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    first: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            isAlpha: true
        }
    },
    last: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            isAlpha: true
        }
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: null,
        validate: {
            isNumeric: true
        }
    }
}, {
    tableName: 'employees',
});

module.exports = Employee;