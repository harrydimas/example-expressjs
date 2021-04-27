const BaseResponse = require("../dto/BaseResponse");
const EmployeeService = require("../services/EmployeeService");

const getEmployees = async (req, res, next) => {
    try {
        const employees = await EmployeeService.getEmployees();
        res.send(BaseResponse(null, null, null, employees));
    } catch (err) {
        next(err);
    }
}

const getEmployeeById = async (req, res, next) => {
    try {
        const employee = await EmployeeService.getEmployeeById(req.params.id);
        res.send(BaseResponse(null, null, null, employee));
    } catch (err) {
        next(err);
    }
}

const getEmployeeByName = async (req, res, next) => {
    try {
        const employee = await EmployeeService.getEmployeeByName(req.params.name);
        res.send(BaseResponse(null, null, null, employee));
    } catch (err) {
        next(err);
    }
}

const createEmployee = async (req, res, next) => {
    try {
        const employee = await EmployeeService.createEmployee(req.body);
        res.send(BaseResponse(null, null, null, employee));
    } catch (err) {
        next(err);
    }
}

module.exports = {getEmployees, getEmployeeById, getEmployeeByName, createEmployee};