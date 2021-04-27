const Employee = require("../models/Employee");

const getEmployees = async () => {
    return await Employee.findAll();
}

const getEmployeeById = async (id) => {
    return await Employee.findByPk(id);
}

const getEmployeeByName = async (name) => {
    return await Employee.findOne({
        where: {
            first: name
        }
    });
}

const createEmployee = async (employee) => {
    return await Employee.create(employee);
}

module.exports = { getEmployees, getEmployeeById, getEmployeeByName, createEmployee };