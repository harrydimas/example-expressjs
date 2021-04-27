const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const faker = require("faker");
const Employee = require("../models/Employee");
const EmployeeRepository = require("../repositories/EmployeeRepository");

describe("EmployeeRepositoryTest", function () {
    const stubValues = [{
        id: faker.random.number(),
        first: faker.name.firstName(),
        last: faker.name.lastName(),
        age: faker.random.number()
    },{
        id: faker.random.number(),
        first: faker.name.firstName(),
        last: faker.name.lastName(),
        age: faker.random.number()
    }];
    describe("getEmployees", function () {
        it("should return list of employee from the db", async function () {
            const stub = sinon.stub(Employee, "findAll").returns(stubValues);
            const employees = await EmployeeRepository.getEmployees();
            expect(stub.calledOnce).to.be.true;
            expect(employees).to.equal(stubValues);
        });
    });
    const stubValue = {
        id: faker.random.number(),
        first: faker.name.firstName(),
        last: faker.name.lastName(),
        age: faker.random.number()
    };
    describe("getEmployeeById", function () {
        it("should return a employee from the db by id", async function () {
            const stub = sinon.stub(Employee, "findByPk").returns(stubValue);
            const employee = await EmployeeRepository.getEmployeeById(stubValue.id);
            expect(stub.calledOnce).to.be.true;
            expect(employee.id).to.equal(stubValue.id);
            expect(employee.first).to.equal(stubValue.first);
            expect(employee.last).to.equal(stubValue.last);
            expect(employee.age).to.equal(stubValue.age);
        });
    });
    describe("getEmployeeByName", function () {
        it("should return a employee from the db by first name", async function () {
            const stub = sinon.stub(Employee, "findOne").returns(stubValue);
            const employee = await EmployeeRepository.getEmployeeByName(stubValue.first);
            expect(stub.calledOnce).to.be.true;
            expect(employee.id).to.equal(stubValue.id);
            expect(employee.first).to.equal(stubValue.first);
            expect(employee.last).to.equal(stubValue.last);
            expect(employee.age).to.equal(stubValue.age);
        });
    });
    describe("createEmployee", function () {
        it("should return new employee from the db", async function () {
            const stub = sinon.stub(Employee, "create").returns(stubValue);
            const employee = await EmployeeRepository.createEmployee(stubValue);
            expect(stub.calledOnce).to.be.true;
            expect(employee.id).to.equal(stubValue.id);
            expect(employee.first).to.equal(stubValue.first);
            expect(employee.last).to.equal(stubValue.last);
            expect(employee.age).to.equal(stubValue.age);
        });
    });
});