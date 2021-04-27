const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const faker = require("faker");
const EmployeeService = require("../services/EmployeeService");
const EmployeeController = require("../controllers/EmployeeController");

describe("EmployeeControllerTest", function () {
    const stubValue = {
        code: 200,
        message: "Success",
        status: true,
        data: [{
            id: faker.random.number(),
            first: faker.name.firstName(),
            last: faker.name.lastName(),
            age: faker.random.number()
        }, {
            id: faker.random.number(),
            first: faker.name.firstName(),
            last: faker.name.lastName(),
            age: faker.random.number()
        }]
    };
    describe("getEmployees", function () {
        let req, res, next;
        let employeeService;
        beforeEach(() => {
            req = {};
            res = { send: function () { } };
            next = function () { };
            employeeService = EmployeeService;
        });
        it("should return list of employee from the db", async function () {
            const mock = sinon.mock(res);
            mock
                .expects("send")
                .once()
                .withExactArgs(stubValue);
            const stub = sinon.stub(employeeService, "getEmployees").returns(stubValue.data);
            await EmployeeController.getEmployees(req, res, next);
            expect(stub.calledOnce).to.be.true;
            mock.verify();
        });
    });
});