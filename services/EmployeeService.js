const EmployeeRepository = require("../repositories/EmployeeRepository");

const getEmployees = async () => {
    return await EmployeeRepository.getEmployees();
}

const getEmployeeById = async (id) => {
    return await EmployeeRepository.getEmployeeById(id);
}

const getEmployeeByName = async (name) => {
    return await EmployeeRepository.getEmployeeByName(name);
}

const createEmployee = async (employee) => {
    return await EmployeeRepository.createEmployee(employee);
}

module.exports = { getEmployees, getEmployeeById, getEmployeeByName, createEmployee };