const Employee = require('../models/employee.model')

/***
 * Controladores para manejo de registro de empleados
 * 
 * saveEmployee:    Guardar empleado 
 * deleteEmployee:  Eliminar empleado en base a un ID
 * listEmployee:    Listar todos los empleados
 * showEmployee:    Obtener data de un empleado en base a un ID
 * EditEmployee:    Editar datos de un empleado en base a su ID
 */

const saveEmployee = async (req, res) => {
    try {
        const { firstName, lastName, age, salary } = req.body;
        const newEmployee = new Employee({
            firstName,
            lastName,
            age,
            salary
        });
        await newEmployee.save();
        return res.json(newEmployee);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const deleteEmployee = async (req, res) => {
    try {
        await Employee.deleteOne({
            _id: req.employee._id
        })
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const listEmployee = async (req, res) => {
    try {
        const employees = await Employee.find()
        return res.json(employees)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const showEmployee = async (req, res) => {
    try {
        return res.json(req.employee)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const editEmployee = async (req, res) => {
    try {
        const { firstName, lastName, age, salary } = req.body;
        await Employee.updateOne({
            _id: req.employee._id
        }, {
            firstName,
            lastName,
            age,
            salary
        });
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    saveEmployee: saveEmployee,
    deleteEmployee: deleteEmployee,
    editEmployee: editEmployee,
    showEmployee: showEmployee,
    listEmployee: listEmployee,
}