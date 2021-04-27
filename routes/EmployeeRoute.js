var express = require('express');
var router = express.Router();

const { 
  getEmployees,
  getEmployeeById,
  getEmployeeByName,
  createEmployee
}  = require ("../controllers/EmployeeController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       required:
 *         - first
 *         - last
 *         - age
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the employee
 *         first:
 *           type: string
 *           description: The employee first name
 *         last:
 *           type: string
 *           description: The employee last name
 *         age:
 *           type: integer
 *           description: The employee age
 *       example:
 *         id: 1
 *         first: John
 *         last: Doe
 *         age: 20
 */

 /**
  * @swagger
  * tags:
  *   name: Employees
  *   description: The Employees managing API
  */

/**
 * @swagger
 * /employees/get-all:
 *   get:
 *     summary: Returns the list of all the employees
 *     tags: [Employees]
 *     responses:
 *       200:
 *         description: The list of the employees
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 */
router.get('/get-all', getEmployees);

/**
 * @swagger
 * /employees/get-by-id/{id}:
 *   get:
 *     summary: Get the employee by id
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The employee id
 *     responses:
 *       200:
 *         description: The employee description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       404:
 *         description: The employee was not found
 */
router.get('/get-by-id/:id', getEmployeeById);

/**
 * @swagger
 * /employees/get-by-name/{name}:
 *   get:
 *     summary: Get the employee by first name
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The employee first name
 *     responses:
 *       200:
 *         description: The employee description by first name
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       404:
 *         description: The employee was not found
 */
router.get('/get-by-name/:name', getEmployeeByName);

/**
 * @swagger
 * /employees/create:
 *   post:
 *     summary: Create a new Employee
 *     tags: [Employees]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       200:
 *         description: The Employee was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       500:
 *         description: Some server error
 */
router.post('/create', createEmployee);

module.exports = router;
