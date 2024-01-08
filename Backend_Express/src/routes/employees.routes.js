const { Router } = require('express')
const routes = Router()

const employeeController = require('../controllers/employee.controller')

const validateMiddleware = require('../middlewares/validator.middleware')
const { createEmployeeSchema } = require('../request/employee.request')
const Employee = require('../models/employee.model')

// Validación en los parametros de ruta
routes.param('id_employee', async (req, res, next, id_employee) => {
    try {
        const employee = await Employee.findById(id_employee);
        if (!employee) return res.status(404).json({ message: "Empleado no encontrado" });
        req.employee = employee
        next()
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
})

routes.get('/employees', employeeController.listEmployee)
routes.get('/employees/:id_employee', employeeController.showEmployee)
routes.post('/employees', validateMiddleware(createEmployeeSchema), employeeController.saveEmployee)
routes.delete('/employees/:id_employee', employeeController.deleteEmployee)
routes.put('/employees/:id_employee', validateMiddleware(createEmployeeSchema), employeeController.editEmployee)

module.exports = routes